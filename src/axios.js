
import _default from './defalut.js';
import { request } from './request.js';
import { merge, assert, clone } from './common.js';
// const urllib = require('url')



//默认参数
class Axios {
  constructor() {
    this.default = _default
    const _this = this;
    return new Proxy(request, {
      //拦截函数的调用,当用户直接调用实例
      apply(fn, thisArgs, args) {
        /*fn --- request
          thisArg
          args-- 其他参
        */
        let options = _this._preprocessArgs(undefined, args)
        if (!options) {
          if (args.length === 2) {
            assert(typeof args[0] == 'string', 'args[0] must is string')
            assert(typeof args[1] == 'object' && args[1] && args[1].constructor == Object)
            options = {
              ...args[1],
              url: args[0]
            }
          } else {
            assert(false, 'invaild args')
          }
        }
        _this.request(options)
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
  request(options) {
    let _headers = this.default.headers;
    delete this.default.headers;
    //克隆一份默认值
    let result = clone(this.default);
    // 1.和this.default进行合并
    merge(result, this.default);
    merge(result, options);
    this.default.headers = _headers;
    options = result;
    //合并头
    let headers = {}
    merge(headers, this.default.headers.common)
    merge(headers, this.default.headers[options.method.toLowerCase()])
    merge(headers, options.headers)
    options.headers = headers
    // 2.检测参数是否正确
    assert(options.method, 'no method')
    assert(typeof options.method == 'string', 'method must be string')
    assert(options.url, 'no url')
    assert(typeof options.url == 'string', 'url must be string')
    // 3.合并baseurl  require  bug
    // options.url = urllib.resolve(options.baseUrl, options.url)
    options.url = options.baseUrl + options.url;
    delete options.baseUrl;
    // 4.发送请求调用request
    request(options)
  }
  _preprocessArgs(method, args) {
    let options = {}
    if (args.length == 1 && typeof args[0] == 'string') {
      options = {
        url: args[0],
        method,
      }
    } else if (args.length == 1 && args[0] && args[0].constructor == Object) {
      options = {
        ...args[0],
        method,
      }
    } else {
      //其他情况给方法自己进行处理
      return undefined;
    }
    return options;

  }
  get(...args) {
    let options = this._preprocessArgs('get', args)
    //string && json两种情况
    if (!options) {
      if (args.length == 2) {
        assert(typeof args[0] == 'string', 'args[0] must is string')
        assert(typeof args[1] == 'object' && args[1] && args[1].constructor == Object)
        options = {
          method: 'get',
          url: args[0],
          ...args[1]
        }
      } else {
        assert(false, 'invaild argments')
      }

    }
    return request(options)
  }
  post(...args) {
    let options = this._preprocessArgs('post', args)
    //string && json两种情况
    if (!options) {
      if (args.length == 2) {
        assert(typeof args[0] == 'string', 'args[0] must is string')
        options = {
          method: 'post',
          url: args[0],
          data: args[1]
        }
      } else if (args.length == 3) {
        assert(typeof args[0] == 'string', 'args[0] must is string')
        assert(typeof args[2] == 'object' && args[2] && args[2].constructor == Object)
        options = {
          method: 'post',
          url: args[0],
          data: args[1],
          ...args[2]
        }
      } else {
        assert(false, 'invaild argments')
      }
    }
    return request(options)
  }
  delete(...args) {
    let options = this._preprocessArgs('delete', args)
    //string && json两种情况
    if (!options) {
      if (args.length === 2) {
        assert(typeof args[0] == 'string', 'args[0] must is string')
        assert(typeof args[1] == 'object' && args[1] && args[1].constructor == Object)
        options = {
          method: 'delete',
          url: args[0],
          ...args[1]
        }
      } else {
        assert(false, 'invaild argments')
      }
    }
    return request(options)
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
  let res = clone(_default)
  merge(res, options)
  axios.default = res
  return axios
}

export default Axios.create();