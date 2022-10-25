import camelCase from 'camelcase'
import ejs from 'ejs'
import { readFileSync, writeFileSync } from 'node:fs'

/**
 * Reserved identifiers for supporting class exports.
 */
const reservedIdentifiers = [
  'BungieToken',
  'BungieError',
  'BungiePlatformError',
  'BungieApi'
]

/**
 * Check if the value is a valid (safe) identifier for raw JavaScript code (without escaping).
 */
function check (value) {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string: ${value}`)
  }
  if (!/^[a-z][a-z0-9]*$/i.test(value)) {
    throw new TypeError(`Invalid identifier name: ${value}`)
  }
  if (reservedIdentifiers.includes(value)) {
    throw new Error(`Reserved identifier: ${value}`)
  }
  return value
}

/**
 * Cast in PascalCase a string.
 */
function pascalCase (text) {
  text = camelCase(text)
  if (text.length <= 0) {
    return text
  } else {
    return text[0].toUpperCase() + text.substring(1)
  }
}

/**
 * Make a text single-lined.
 */
function stripCRLF (value) {
  return typeof value === 'string'
    ? value.replace(/[\n\r]+/g, ' ')
    : ''
}

/**
 * Read, compile, and write an EJS template.
 */
function compile (sourceFile, targetFile, context = {}) {
  writeFileSync(
    targetFile,
    ejs.render(
      readFileSync(sourceFile, 'utf8'),
      context
    )
  )
}

/**
 * Extract the resulting class name from OpenAPI tags array.
 */
function getSwaggerTag (tags) {
  if (Array.isArray(tags) && tags.length === 1) {
    return tags[0].trim()
  }
}

/**
 * Extract path parameters from a Swagger URL path string.
 */
function * getPathParameters (path) {
  const regex = /\{(\w+)\}/gi
  let matched = regex.exec(path)
  while (matched) {
    yield check(matched[1])
    matched = regex.exec(path)
  }
}

/**
 * Cast enum name from Swagger operationId.
 */
function getEnumIdentifier (operationId) {
  // return check(operationId.replace(/\W+/g, ''))
  return check(operationId.split('.').reverse()[0])
}

/**
 * Extract enum name from paramter schema.
 */
function extractEnumIdentifier (schema) {
  const ref = Object(Object(schema)['x-enum-reference']).$ref
  if (typeof ref === 'string') {
    const match = ref.match(/^#\/components\/schemas\/(.+)/)
    if (match) {
      return getEnumIdentifier(match[1])
    }
  }
}

/**
 * Read a file from FS and parse as a UTF-8 JSON string.
 */
function parseJsonFile (file) {
  return JSON.parse(readFileSync(file, 'utf8'))
}

/**
 * From here, generate code from Swagger specs
 */
console.log('Start code generation')

const swagger = parseJsonFile('./swagger.json')

const context = {
  enums: [],
  components: []
}

function pushMethod (tag, options) {
  let obj = context.components.find(item => item.tag === tag)
  if (!obj) {
    obj = {
      tag,
      identifier: check(pascalCase(tag)),
      methods: []
    }
    context.components.push(obj)
  }
  obj.methods.push(options)
}

function ensureEnum (identifier) {
  if (identifier) {
    if (!context.enums.some(item => item.identifier === identifier)) {
      throw new Error(`Enum not found: ${identifier}`)
    }
  }
  return identifier
}

/**
 * Inject string template variable inside a Swagger URL path.
 */
function injectUrlArgument (path, identifier) {
  return path.replace(new RegExp(`\\{${identifier}\\}`), '${' + identifier + '}')
}

function parseSwaggerRoute (path, method, options) {
  const tag = getSwaggerTag(options.tags)
  if (!tag) {
    return
  }

  // sort params by URL position
  const sortedParams = Array.from(getPathParameters(path)).map(
    paramName => options.parameters.find(
      item => item.in === 'path' && item.name === paramName
    )
  )

  const args = sortedParams.map(item => ({
    identifier: check(item.name),
    // type: item.schema.type,
    enum: ensureEnum(extractEnumIdentifier(item.schema)),
    description: stripCRLF(item.description),
    _js: item.name,
    _md: item.name,
    _ts: `${item.name}: number | string`
  }))

  const hasSearchParams = options.parameters.some(
    item => item.in === 'query'
  )
  if (hasSearchParams) {
    args.push({
      identifier: 'searchParams',
      description: 'Request querystring parameters object.',
      _js: 'searchParams = {}',
      _md: '[searchParams]',
      _ts: 'searchParams?: object'
    })
  }

  const hasBody = method === 'POST'
  if (hasBody) {
    args.push({
      identifier: 'body',
      description: 'Request body object.',
      _js: 'body = {}',
      _md: '[body]',
      _ts: 'body?: object'
    })
  }

  const url = args.reduce(
    (acc, arg) => injectUrlArgument(acc, arg.identifier),
    path
  )

  pushMethod(tag, {
    identifier: check(camelCase(options.operationId.substring(tag.length))),
    arguments: args,
    description: stripCRLF(options.description),
    request: {
      method,
      path
    },
    swagger: {
      operationId: options.operationId
    },
    flags: {
      body: hasBody,
      searchParams: hasSearchParams
    },
    _url: '`Platform' + url + '`'
  })
}

for (const key of Object.keys(swagger.components.schemas)) {
  const value = swagger.components.schemas[key]
  if (Array.isArray(value['x-enum-values'])) {
    context.enums.push({
      identifier: getEnumIdentifier(key),
      name: key,
      description: stripCRLF(value.description),
      items: value['x-enum-values'].map(item => ({
        key: item.identifier,
        value: parseInt(item.numericValue),
        description: stripCRLF(item.description)
      }))
    })
  }
}

for (const path of Object.keys(swagger.paths)) {
  const options = swagger.paths[path]
  if (options.get) {
    parseSwaggerRoute(path, 'GET', options.get)
  }
  if (options.post) {
    parseSwaggerRoute(path, 'POST', options.post)
  }
}

// Compilation time!
compile('templates/docs_enums.ejs', 'docs/Enums.md', context)
compile('templates/enums.ejs', './lib/enums.js', context)
compile('templates/enums.d.ejs', './lib/enums.d.ts', context)
for (const item of context.components) {
  compile('templates/docs_component.ejs', `docs/${item.identifier}.md`, item)
  compile('templates/component.ejs', `lib/components/${item.identifier}.js`, item)
  compile('templates/component.d.ejs', `lib/components/${item.identifier}.d.ts`, item)
}

console.log('Code generation completed')
