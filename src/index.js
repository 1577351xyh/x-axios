import axios from './axios.js'

let a = axios.create({
  baseUrl: 'aaaaaa',
  methods: 'post',
  token:1111
})
console.log(a.default)
// axios.get('url')
// axios('/url',{
//   method:'get',
//   data:{
//     a:1
//   }
// })

// get(url)
// gte(url, { params: {}, headers: {} })
// gte({ url: '', params: {}, headers: {} })


// post(url)
// post(url,{a:1,b:2})

