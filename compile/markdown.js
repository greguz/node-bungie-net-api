import {
  getEnumIdentifier,
  getReferenceIdentifier,
  iterateSchemaProperties,
  resolveSchema,
  stripCRLF,
  uniq
} from './util.js'

export function compileMarkdownIdentifier (arg) {
  if (arg.required) {
    return arg.identifier
  } else {
    return `[${arg.identifier}]`
  }
}

export function compileMarkdownArgument (swagger, arg, prefix = '', tabs = 0) {
  let code = twoSpaces(tabs) + '- `'
  if (!arg.required) {
    code += '['
  }
  code += prefix + arg.identifier
  if (!arg.required) {
    code += ']'
  }
  code += '` '
  const schema = resolveSchema(swagger, arg.schema)
  code += compileMarkdownType(swagger, schema)
  if (schema['x-enum-reference']) {
    const enumIdentifier = getEnumIdentifier(getReferenceIdentifier(schema['x-enum-reference'].$ref))
    code += ` See [${enumIdentifier}](./Enums.md#${enumIdentifier}) enum.`
  }
  if (arg.description || schema.description) {
    code += ' ' + stripCRLF(arg.description || schema.description)
  }
  for (const property of iterateSchemaProperties(swagger, schema)) {
    let newPrefix = prefix + arg.identifier
    if (schema.type === 'array') {
      newPrefix += '[]'
    }
    newPrefix += '.'
    code += '\n'
    code += compileMarkdownArgument(swagger, property, newPrefix, tabs + 1)
  }
  return code
}

function twoSpaces (n) {
  let text = ''
  for (let i = 0; i < n; i++) {
    text += '  '
  }
  return text
}

function compileMarkdownType (swagger, schema) {
  if (Array.isArray(schema.type)) {
    return uniq(schema.type.map(type => compileMarkdownType(swagger, { type }))).join(' | ')
  } else if (schema.type === 'array') {
    const itemsSchema = resolveSchema(swagger, schema.items)

    if (itemsSchema.type === 'integer' || itemsSchema.type === 'number') {
      return '`<number[]>`'
    } else if (itemsSchema.type === 'object') {
      return '`<Object[]>`'
    } else if (itemsSchema.type === 'string') {
      return '`<string[]>`'
    } else {
      console.warn({ schema: itemsSchema }, 'unsupported markdown items schema type')
      return '`<Array>`'
    }
  } else if (schema.type === 'bigint') {
    return '`<BigInt>`'
  } else if (schema.type === 'boolean') {
    return '`<boolean>`'
  } else if (schema.type === 'integer' || schema.type === 'number') {
    return '`<number>`'
  } else if (schema.type === 'object') {
    return '`<Object>`'
  } else if (schema.type === 'string') {
    return '`<string>`'
  } else {
    console.warn({ schema }, 'unsupported markdown schema type')
    return '`<*>`'
  }
}
