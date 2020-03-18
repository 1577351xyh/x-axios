
import _default from './defalut.js'
import { request } from './request.js'
import { setOptions,assert } from './common'



//默认参数


class Axios {
  constructor() {
    const _this = this;
    return new Proxy(request, {
      //拦截函数的调用
      apply(fn, thisArgs, args) {
        /*fn --- request
          thisArg
          args-- 其他参
        */
        console.log(fn, thisArgs, args)
      },
      get(data, name) {
        return _this[name]
      },
      set(data, name, val) {
        _this[name] = val;
        return true
      }
    })
  }
  get() {
    alert('get')
  }
  set() {

  }
}

//如何让用户能够同时在实例上调用,也能直接在类上调用
// axios.create()
// Axios.create()
Axios.create = Axios.prototype.create = function (options) {
  let axios = new Axios()
  //给每一个实例都加上默认的default --深拷贝
  //axios返回的是proxy对象
  //处理初始值和default的合并
  // axios.default = JSON.parse(JSON.stringify(_default))
  let res = JSON.parse(JSON.stringify(_default))
  setOptions(res,options)
  axios.default = res
  return axios
}

export default Axios.create();