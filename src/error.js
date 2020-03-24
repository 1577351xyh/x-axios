export default function (xhr) {
  //  响应头处理
  let arr = xhr.getAllResponseHeaders().split('\r\n')
  let headers = {};
  arr.forEach(element => {
    if (!element) return;
    let [name, val] = element.split(': ');
    headers[name] = val
  });

  return {
    ok: false,
    data: xhr.response,
    status: xhr.status,
    statusText: xhr.statusText,
    headers: xhr.getAllResponseHeaders(),
    xhr,
  }
}