import pascalCase from 'pascalcase'

import {
  isObjectLikeSchema,
  resolveSchema,
  validateIdentifier
} from './util.js'

/**
 * Compile TypeScript argument declaration.
 */
export function compileTypeScriptArgument (swagger, arg, method) {
  const { schema } = arg

  let code = arg.identifier
  if (!arg.required) {
    code += '?'
  }
  code += ': '
  if (method && isObjectLikeSchema(schema)) {
    code += compileInterfaceIdentifier(arg, method)
  } else {
    code += compileTypeScriptType(swagger, arg.schema)
  }
  return code
}

export function compileInterfaceIdentifier (arg, method) {
  return pascalCase(method.identifier + '_' + arg.identifier)
}

export function compileTypeScriptType (swagger, schema = {}) {
  schema = resolveSchema(swagger, schema)

  if (schema.type === 'array') {
    return `${compileTypeScriptType(swagger, schema.items)}[]`
  } else if (schema.type === 'boolean') {
    return 'boolean'
  } else if (schema.type === 'integer' || schema.type === 'number') {
    return 'number'
  } else if (schema.type === 'object') {
    return `{ ${
      Object
        .keys(schema.properties)
        .map(key => compileTypeScriptProperty(swagger, schema, key))
        .join(' ')
    } }`
  } else if (schema.type === 'string') {
    return 'string'
  } else {
    if (schema.type) {
      console.warn({ schema }, 'unsupported typescript schema type')
    }
    return 'any'
  }
}

function compileTypeScriptProperty (swagger, schema, key) {
  let code = validateIdentifier(key)
  if (!schema.required?.includes(key)) {
    code += '?'
  }
  return code + ': ' + compileTypeScriptType(swagger, schema.properties[key]) + ';'
}
