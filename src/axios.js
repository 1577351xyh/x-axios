
function request(...args) { }


class Axios {
  constructor() {
    const _this = this;
    return new Proxy(request, {
      apply(fn, thisArg, args) {
        console.log(fn, thisArg, args)
      },
      get(data, name) {
        return _this[name]
      },
      set(data, name, val) {
        data[name] = val;
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

let axios = new Axios()
export default axios;