export function assert(exp, msg = 'assert fiald') {
  if (!exp) {
    throw new Error(msg)
  }
}

export function merge(dest, src) {
  for (let name in src) {
    if (typeof src[name] === 'object') {
      if (!dest[name]) {
        dest[name] = {}
      }
      merge(dest[name], src[name])
    } else {
      if (src[name] !== undefined) {
        dest[name] = src[name]
      }
    }
  }
}

export function clone(obj) {
  let obj2
  if (typeof Obj === 'object') {
    if (obj instanceof Array) {
      obj2 = []
      obj.forEach((el, i) => {
        obj[i] = clone(obj[i])
      });
    } else {
      obj2 = {}
      for (let key in obj) {
        obj2[key] = clone(obj[key])
      }
    }
    return obj2
  } else {
    return obj
  }
}