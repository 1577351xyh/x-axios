export default {
  baseUrl: '',
  method: 'get',
  headers: {
    common: {
      'X-Request-By': 'XMLHttpRequest'
    },
    get: {},
    post: {}
  },
  //请求拦截
  transformRequest(config) {
    return config
  },
  //响应拦截
  transformResponse(response) {
    return JSON.parse(response)
  }
}