import { writeFileSync } from 'node:fs'

import * as enums from './lib/enum.js'

const EOL = '\n'

function createEnumDeclaration (enumName) {
  const enumObj = enums[enumName]
  const enumKeys = Object.keys(enumObj)
  let text = `export declare const ${enumName}: {${EOL}`
  for (const enumKey of enumKeys) {
    text += `  ${enumKey}: ${enumObj[enumKey]};${EOL}`
  }
  return text + `}${EOL}`
}

writeFileSync(
  './lib/enum.d.ts',
  Object.keys(enums).map(key => createEnumDeclaration(key)).join(EOL)
)
