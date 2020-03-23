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
/* 
JSON.parse(JSON.stringify(obj))
1.无法克隆对象中的方法
2.对象会直接置空
*/
export function clone(obj) {
  let obj2;
  if (typeof obj == 'object') {
    if (obj instanceof Array) {
      obj2 = []
      for (let i = 0; i < obj.length; i++) {
        obj2[i] = clone(obj[i])
      }
    } else {
      obj2 = {}
      for (let key in obj) {
        obj2[key] = clone(obj[key])
      }
    }
    return obj2;
  } else {
    return obj
  }
}