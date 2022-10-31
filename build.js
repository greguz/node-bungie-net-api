import camelCase from 'camelcase'
import ejs from 'ejs'
import { readFileSync, writeFileSync } from 'node:fs'

/**
 * Reserved identifiers for supporting class exports.
 */
const reservedIdentifiers = [
  'bungietoken',
  'bungieerror',
  'bungieplatformerror',
  'bungieapi',
  'body',
  'searchparams'
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
  if (reservedIdentifiers.includes(value.toLowerCase())) {
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
 * Compile JSDoc argument identifier.
 */
function compileJSDocArgumentType (arg) {
  if (arg.identifier === 'searchParams' || arg.identifier === 'body') {
    return '{Object}'
  } else if (arg.enum) {
    return '{number}'
  } else if (arg.schema.type === 'boolean') {
    return '{boolean}'
  } else {
    return '{string|number}'
  }
}

/**
 * Compile JavaScript argument identifier with its initializer.
 */
function compileJavaScriptArgument (arg) {
  if (arg.identifier === 'searchParams' || arg.identifier === 'body') {
    return `${arg.identifier} = {}`
  } else {
    return arg.identifier
  }
}

/**
 * Compile valid Markdown docs for an argument.
 */
function compileJSDocArgument (arg) {
  if (arg.identifier === 'searchParams' || arg.identifier === 'body') {
    return `[${arg.identifier}]`
  } else {
    return `${arg.identifier}`
  }
}

/**
 * Compile valid Markdown docs for an argument's type.
 */
function compileMarkdownArgumentType (arg) {
  if (arg.identifier === 'searchParams' || arg.identifier === 'body') {
    return '`<Object>`'
  } else if (arg.enum) {
    return '`<number>`'
  } else if (arg.schema.type === 'boolean') {
    return '`<boolean>`'
  } else {
    return '`<string>` | `<number>`'
  }
}

/**
 * Compile TypeScript argument declaration.
 */
function compileTypeScriptArgument (arg) {
  if (arg.identifier === 'searchParams' || arg.identifier === 'body') {
    return `${arg.identifier}?: object`
  } else if (arg.enum) {
    return `${arg.identifier}: number`
  } else if (arg.schema.type === 'boolean') {
    return `${arg.identifier}: boolean`
  } else {
    return `${arg.identifier}: number | string`
  }
}

/**
 * Read, compile, and write an EJS template.
 */
function compile (sourceFile, targetFile, context = {}) {
  writeFileSync(
    targetFile,
    ejs.render(
      readFileSync(sourceFile, 'utf8'),
      {
        ...context,
        compileJavaScriptArgument,
        compileJSDocArgument,
        compileJSDocArgumentType,
        compileMarkdownArgumentType,
        compileTypeScriptArgument
      }
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
      key: camelCase(tag),
      tag,
      identifier: check(pascalCase(tag)),
      methods: []
    }
    context.components.push(obj)
  }
  obj.methods.push(options)
}

/**
 * Inject string template variable inside a Swagger URL path.
 */
function injectUrlArgument (path, identifier) {
  return path.replace(new RegExp(`\\{${identifier}\\}`), '${' + identifier + '}')
}

const validUrlTypes = ['boolean', 'integer', 'number', 'string']

function parseSwaggerPathArgument (item) {
  const enumIdentifier = extractEnumIdentifier(item.schema)
  if (enumIdentifier) {
    if (!context.enums.some(item => item.identifier === enumIdentifier)) {
      throw new Error(`Enum not found: ${enumIdentifier}`)
    }
  }
  if (!validUrlTypes.includes(item.schema.type)) {
    throw new Error(`Unexpected URL parameter type for ${item.name}`)
  }
  return {
    identifier: check(item.name),
    description: stripCRLF(item.description),
    schema: item.schema,
    enum: enumIdentifier
  }
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

  const args = sortedParams.map(parseSwaggerPathArgument)

  const hasSearchParams = options.parameters.some(
    item => item.in === 'query'
  )
  if (hasSearchParams) {
    args.push({
      identifier: 'searchParams',
      description: 'Request querystring parameters object.',
      schema: { type: 'object' }
    })
  }

  const hasBody = method === 'POST'
  if (hasBody) {
    args.push({
      identifier: 'body',
      description: 'Request body object.',
      schema: { type: 'object' }
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
