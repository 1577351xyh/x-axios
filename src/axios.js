import _defalut from './defalut.js'
import request from './request'
import { merge, assert, clone } from './common.js';

class Axios {
  constructor() {
    const _this = this
    // 默认配置
    this.deffault = _default
    return new Proxy(request, {
      apply(fn, thisArgs, args) {

      },
      get(data, name) {
        return _this[name]
      },
      set(data, name, val) {
        _this[name] = val
        return true
      }
    })
  }
}

Axios, create = Axios.prototype.create = function (param) {
  let axios = new Axios()
  let res = clone(_defalut)
  merge(res, options)
  axios.default = res
  return axios
}
export default Axios.create()