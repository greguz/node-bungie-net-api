/**
 * Reserved identifiers for supporting class exports.
 */
const reservedIdentifiers = [
  'BungieToken',
  'BungieError',
  'BungiePlatformError',
  'BungieApi',
  'body',
  'searchParams'
].map(key => key.toLocaleLowerCase())

/**
 * Check if the value is a valid (safe) identifier for raw JavaScript code (without escaping).
 */
export function validateIdentifier (value) {
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
 * Extract a reference identifier from a reference path.
 */
export function getReferenceIdentifier (ref) {
  if (typeof ref !== 'string') {
    throw new TypeError(`Invalid reference type: ${ref}`)
  }
  const match = ref.match(/^#\/components\/schemas\/(.+)/)
  if (!match) {
    throw new Error(`Unknown reference format: ${ref}`)
  }
  return match[1]
}

/**
 * Get schema object from reference path.
 */
export function resolveSchemaReference (swagger, ref) {
  const schema = swagger.components.schemas[getReferenceIdentifier(ref)]
  if (!schema) {
    throw new Error(`Schema not found: ${ref}`)
  }
  return schema
}

/**
 *
 */
export function resolveSchema (swagger, schema = {}) {
  return schema.$ref ? resolveSchemaReference(swagger, schema.$ref) : schema
}

/**
 * Make a text single-lined.
 */
export function stripCRLF (value) {
  return typeof value === 'string'
    ? value.replace(/[\n\r]+/g, ' ')
    : ''
}

/**
 * Iterate JSON Schema properties objects.
 */
export function iterateSchemaProperties (swagger, schema) {
  schema = resolveSchema(swagger, schema)
  if (schema.type === 'object') {
    return iterateObjectProperties(schema)
  } else if (schema.type === 'array') {
    const itemsSchema = resolveSchema(swagger, schema.items)
    if (itemsSchema.type === 'object') {
      return iterateObjectProperties(itemsSchema)
    }
  }
  return []
}

function * iterateObjectProperties (schema) {
  for (const key of Object.keys(schema.properties)) {
    yield {
      identifier: key,
      required: !!schema.required?.includes(key),
      schema: schema.properties[key]
    }
  }
}

/**
 * Detect object schemas or array of objects.
 */
export function isObjectLikeSchema (schema) {
  return schema.type === 'object' || (schema.type === 'array' && schema.items?.type === 'object')
}

/**
 * Cast enum name from Swagger operationId.
 */
export function getEnumIdentifier (operationId) {
  return validateIdentifier(operationId.split('.').reverse()[0])
}

/**
 * Leave only unique values inside the array.
 */
export function uniq (values) {
  return values.reduce(
    (acc, value) => {
      if (!acc.includes(value)) {
        acc.push(value)
      }
      return acc
    },
    []
  )
}
