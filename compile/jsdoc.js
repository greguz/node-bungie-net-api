import { resolveSchema, stripCRLF, uniq } from './util.js'

/**
 * Compile valid Markdown docs for an argument.
 */
export function compileJSDocArgument (swagger, arg) {
  const schema = resolveSchema(swagger, arg.schema)
  let text = '@param {' + compileJSDocType(swagger, schema) + '} '
  if (!arg.required) {
    text += '['
  }
  text += arg.identifier
  if (!arg.required) {
    text += ']'
  }
  // TODO: enum
  if (arg.description || arg.schema.description) {
    text += ' ' + stripCRLF(arg.description || arg.schema.description)
  }
  return text
}

function compileJSDocType (swagger, schema) {
  if (Array.isArray(schema.type)) {
    return uniq(schema.type.map(type => compileJSDocType(swagger, { type }))).join('|')
  } else if (schema.type === 'array') {
    const itemsSchema = resolveSchema(swagger, schema.items)
    if (itemsSchema.type === 'integer' || itemsSchema.type === 'number') {
      return 'number[]'
    } else if (itemsSchema.type === 'object') {
      return 'Object[]'
    } else if (itemsSchema.type === 'string') {
      return 'string[]'
    } else {
      console.warn({ schema: itemsSchema }, 'unsupported jsdoc items schema type')
      return 'Array'
    }
  } else if (schema.type === 'bigint') {
    return 'BigInt'
  } else if (schema.type === 'boolean') {
    return 'boolean'
  } else if (schema.type === 'integer' || schema.type === 'number') {
    return 'number'
  } else if (schema.type === 'object') {
    return 'Object'
  } else if (schema.type === 'string') {
    return 'string'
  } else {
    console.warn({ schema }, 'unsupported jsdoc schema type')
    return '*'
  }
}
