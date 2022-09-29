export const symEnumName = Symbol('bnapi-enum-name')

export function validateEnum (value, obj) {
  if (typeof value === 'string') {
    value = parseInt(value)
  }
  if (!Object.values(obj).includes(value)) {
    throw new Error(`Invalid ${obj[symEnumName]} enum value`)
  }
  return value
}

export function validateEnums (values, obj) {
  if (!Array.isArray(values)) {
    throw new TypeError('Expected array of values')
  }
  if (values.length < 1) {
    throw new Error('Expected at least one element')
  }
  return values.map(value => validateEnum(value, obj))
}
