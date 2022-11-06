import camelCase from 'camelcase'
import ejs from 'ejs'
import { readFileSync, writeFileSync } from 'node:fs'
import pascalCase from 'pascalcase'

import { compileJavaScriptArgument } from './compile/javascript.js'
import { compileJSDocArgument } from './compile/jsdoc.js'
import {
  compileMarkdownArgument,
  compileMarkdownIdentifier
} from './compile/markdown.js'
import {
  compileInterfaceIdentifier,
  compileTypeScriptArgument,
  compileTypeScriptType
} from './compile/typescript.js'
import {
  getEnumIdentifier,
  getReferenceIdentifier,
  isObjectLikeSchema,
  iterateSchemaProperties,
  resolveSchema,
  stripCRLF,
  validateIdentifier
} from './compile/util.js'

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
        compileInterfaceIdentifier,
        compileJavaScriptArgument,
        compileJSDocArgument: compileJSDocArgument.bind(null, swagger),
        compileMarkdownArgument: compileMarkdownArgument.bind(null, swagger),
        compileMarkdownIdentifier,
        compileTypeScriptArgument: compileTypeScriptArgument.bind(null, swagger),
        compileTypeScriptType: compileTypeScriptType.bind(null, swagger),
        isObjectLikeSchema,
        iterateSchemaProperties: iterateSchemaProperties.bind(null, swagger),
        stripCRLF
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
    yield validateIdentifier(matched[1])
    matched = regex.exec(path)
  }
}

/**
 *
 */
function resolveEnumIdentifier (ref) {
  const identifier = getEnumIdentifier(getReferenceIdentifier(ref))
  if (!context.enums.some(item => item.identifier === identifier)) {
    throw new Error(`Enum not found: ${identifier}`)
  }
  return identifier
}

/**
 * Extract enum name from paramter schema.
 */
function extractEnumIdentifier (schema) {
  const ref = Object(Object(schema)['x-enum-reference']).$ref
  if (ref) {
    return resolveEnumIdentifier(ref)
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
      identifier: validateIdentifier(pascalCase(tag)),
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
  const schema = resolveSchema(swagger, item.schema)
  if (!validUrlTypes.includes(schema.type)) {
    throw new Error(`Unexpected URL parameter type for ${item.name}`)
  }

  const enumIdentifier = extractEnumIdentifier(schema)

  // This is necessary because of int32/int64 presence
  const schemaType = !enumIdentifier && (schema.format === 'int32' || schema.format === 'int64')
    ? ['bigint', 'integer', 'string']
    : schema.type

  return {
    description: stripCRLF(item.description),
    enum: enumIdentifier,
    identifier: validateIdentifier(item.name),
    required: true,
    schema: {
      ...schema,
      type: schemaType
    }
  }
}

function getBodySchema (options) {
  const schema = options.requestBody?.content?.['application/json']?.schema
  if (schema) {
    return resolveSchema(swagger, schema)
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

  const urlArgs = sortedParams.map(parseSwaggerPathArgument)

  const qsArgs = options.parameters.filter(item => item.in === 'query')
  if (qsArgs.length > 0) {
    urlArgs.push({
      description: 'Request querystring parameters object.',
      identifier: 'searchParams',
      required: false,
      schema: {
        type: 'object',
        additionalProperties: false,
        properties: qsArgs.reduce(
          (acc, arg) => {
            acc[arg.name] = {
              description: arg.description,
              ...resolveSchema(swagger, arg.schema)
            }
            return acc
          },
          {}
        )
      }
    })
  }

  const bodySchema = getBodySchema(options)
  if (bodySchema) {
    urlArgs.push({
      description: 'Request body object.',
      identifier: 'body',
      required: false,
      schema: bodySchema
    })
  }

  const url = urlArgs.reduce(
    (acc, arg) => injectUrlArgument(acc, arg.identifier),
    path
  )

  pushMethod(tag, {
    identifier: validateIdentifier(camelCase(options.operationId.substring(tag.length))),
    arguments: urlArgs,
    description: stripCRLF(options.description),
    request: {
      method,
      path
    },
    swagger: {
      operationId: options.operationId
    },
    flags: {
      body: !!bodySchema,
      searchParams: qsArgs.length > 0
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
