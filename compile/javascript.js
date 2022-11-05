/**
 * Compile JavaScript argument identifier with its initializer.
 */
export function compileJavaScriptArgument (arg) {
  // TODO: should work, I think :)
  if (arg.identifier === 'searchParams' || arg.identifier === 'body') {
    return `${arg.identifier} = {}`
  } else {
    return arg.identifier
  }
}
