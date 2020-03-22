// data需要做json解析
export default function (xhr) {
  return {
    ok: true,
    data:xhr.response,
    status:xhr.status,
    statusText:xhr.statusText
  }
}