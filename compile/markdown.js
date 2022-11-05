import {
  getEnumIdentifier,
  getReferenceIdentifier,
  iterateSchemaProperties,
  resolveSchema,
  stripCRLF
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
  if (schema.type === 'array') {
    const itemsSchema = resolveSchema(swagger, schema.items)

    if (itemsSchema.type === 'integer' || itemsSchema.type === 'number') {
      code += '`<number[]>`'
    } else if (itemsSchema.type === 'object') {
      code += '`<Object[]>`'
    } else if (itemsSchema.type === 'string') {
      code += '`<string[]>`'
    } else {
      console.warn({ schema: itemsSchema }, 'unsupported markdown array schema type')
      code += '`<Array>`'
    }
  } else if (schema.type === 'boolean') {
    code += '`<boolean>`'
  } else if (schema.type === 'integer' || schema.type === 'number') {
    code += '`<number>`'
  } else if (schema.type === 'object') {
    code += '`<Object>`'
  } else if (schema.type === 'string') {
    code += '`<string>`'
  } else {
    console.warn({ schema }, 'unsupported markdown schema type')
    code += '`<*>`'
  }
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
