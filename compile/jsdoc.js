import { stripCRLF } from './util.js'

/**
 * Compile valid Markdown docs for an argument.
 */
export function compileJSDocArgument (arg) {
  let text = '@param '
  if (arg.schema.type === 'array') {
    if (arg.schema.items.type === 'integer' || arg.schema.items.type === 'number') {
      text += '{number[]}'
    } else if (arg.schema.items.type === 'object') {
      text += '{Object[]}'
    } else if (arg.schema.items.type === 'string') {
      text += '{string[]}'
    } else {
      console.warn({ schema: arg.schema }, 'unsupported jsdoc array schema type')
      text += '{Array}'
    }
  } else if (arg.schema.type === 'boolean') {
    text += '{boolean}'
  } else if (arg.schema.type === 'integer' || arg.schema.type === 'number') {
    text += '{number}'
  } else if (arg.schema.type === 'object') {
    text += '{Object}'
  } else if (arg.schema.type === 'string') {
    text += '{string}'
  } else {
    console.warn({ schema: arg.schema }, 'unsupported jsdoc schema type')
    text += '{*}'
  }
  text += ' '
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
