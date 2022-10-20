import camelCase from 'camelcase'
import Handlebars from 'handlebars'
import { readFileSync, writeFileSync } from 'node:fs'

/**
 * Compile the URL string template with all arguments.
 */
Handlebars.registerHelper('_url', method => {
  const url = method.arguments.reduce(
    (acc, item) => injectUrlArgument(acc, item.identifier),
    method.request.path
  )
  return '`Platform' + url + '`'
})

/**
 * Inject string template variable inside a Swagger URL path.
 */
function injectUrlArgument (path, identifier) {
  return path.replace(new RegExp(`\\{${identifier}\\}`), '${' + identifier + '}')
}

/**
 * Compile variables declaration for a class method.
 */
Handlebars.registerHelper('_arguments', items => {
  return items.map(item => compileMethodArgument(item.identifier)).join(', ')
})

/**
 * Compile the method's argument declaration (and its initialization).
 */
function compileMethodArgument (identifier) {
  let code = check(identifier)
  if (identifier === 'searchParams' || identifier === 'body') {
    code += ' = {}'
  }
  return code
}

/**
 * Compile variables declaration for a class method.
 */
Handlebars.registerHelper('_typedArguments', items => {
  return items.map(compileTypedArgument).join(', ')
})

/**
 *
 */
function compileTypedArgument (item) {
  let code = item.identifier
  if (item.identifier === 'searchParams' || item.identifier === 'body') {
    code += '?: object'
  } else if (item.enum) {
    code += ': number'
  } else {
    code += ': number | string'
  }
  return code
}

/**
 * Check if the value is a valid safe identifier for raw JavaScript code (without escaping).
 */
function check (value) {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected a string: ${value}`)
  }
  if (!/^[a-z][a-z0-9]*$/i.test(value)) {
    throw new TypeError(`Invalid identifier name: ${value}`)
  }
  return value
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
 * Compile a HBS template, and write the compilation result in a file.
 */
function compile (sourceFile, targetFile, context = {}) {
  const fn = Handlebars.compile(
    readFileSync(sourceFile, 'utf8')
  )
  writeFileSync(targetFile, fn(context))
}

/**
 * Extract the resulting class name from OpenAPI tags array.
 */
function getClassName (tags) {
  if (!Array.isArray(tags)) {
    throw new TypeError(`Expected tags array: ${tags}`)
  }
  if (tags.length !== 1 || tags[0] === '') {
    // Just skip those cases
    return null
  }
  const [value] = tags
  check(value)
  if (!/^[A-Z]/.test(value)) {
    throw new Error(`Invalid class identifier: ${value}`)
  }
  return value
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
  components: {}
}

function pushMethod (className, options) {
  if (!context.components[className]) {
    context.components[className] = []
  }
  context.components[className].push(options)
}

function ensureEnum (identifier) {
  if (identifier) {
    if (!context.enums.some(item => item.identifier === identifier)) {
      throw new Error(`Enum not found: ${identifier}`)
    }
  }
  return identifier
}

function parseSwaggerRoute (path, method, options) {
  const className = getClassName(options.tags)
  if (!className) {
    return
  }

  const pathParams = Array.from(getPathParameters(path)).map(
    paramName => options.parameters.find(
      item => item.in === 'path' && item.name === paramName
    )
  )

  const methodArguments = pathParams.map(item => ({
    identifier: check(item.name),
    type: item.schema.type,
    enum: ensureEnum(extractEnumIdentifier(item.schema)),
    description: stripCRLF(item.description)
  }))

  const hasSearchParams = options.parameters.some(
    item => item.in === 'query'
  )
  if (hasSearchParams) {
    methodArguments.push({
      identifier: 'searchParams',
      description: 'Request querystring parameters object.',
      type: 'object'
    })
  }

  const hasBody = method === 'POST'
  if (hasBody) {
    methodArguments.push({
      identifier: 'body',
      description: 'Request body object.',
      type: 'object'
    })
  }

  pushMethod(className, {
    name: camelCase(options.operationId.substring(className.length)),
    arguments: methodArguments,
    request: {
      method,
      path
    },
    swagger: {
      description: stripCRLF(options.description),
      operationId: options.operationId
    },
    hasSearchParams,
    hasBody
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
compile('templates/enum.hbs', './lib/enum.js', context)
compile('templates/enum.d.hbs', './lib/enum.d.ts', context)
for (const key of Object.keys(context.components)) {
  const classContext = {
    name: key,
    methods: context.components[key]
  }
  compile('templates/component.hbs', `lib/components/${key}.js`, classContext)
  compile('templates/component.d.hbs', `lib/components/${key}.d.ts`, classContext)
}

console.log('Code generation completed')
