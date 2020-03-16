export function assert(exp, msg = 'assert fiald') {
  if (!exp) {
    throw new Error(msg)
  }
}