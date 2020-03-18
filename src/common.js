export function assert(exp, msg = 'assert fiald') {
  if (!exp) {
    throw new Error(msg)
  }
}
export function setOptions(obj1, obj2) {
  for (let name in obj2) {
    if (typeof obj2[name] == 'object') {
      for (let name2 in obj2[name]) {
        //如果defalut没有
        if (!obj1[name]) {
          obj1[name] = {}
        }
      }
      setOptions(obj1[name], obj2[name])
    } else {
      obj1[name] = obj2[name];
    }
  }
}