export function assert(exp, msg = 'assert fiald') {
  if (!exp) {
    throw new Error(msg)
  }
}
export function merge(dest, src) {
  for (let name in src) {
    if (typeof src[name] == 'object') {
      for (let name2 in src[name]) {
        //如果defalut没有
        if (!dest[name]) {
          dest[name] = {}
        }
      }
      merge(dest[name], src[name])
    } else {
      dest[name] = src[name];
    }
  }
}
export function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}