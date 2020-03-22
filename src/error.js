export default function (xhr) {
  return {
    ok: false,
    data: xhr.response,
    status: xhr.status,
    statusText: xhr.statusText
  }
}