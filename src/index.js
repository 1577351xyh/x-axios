import axios from './axios.js'

let a = axios.create({
  
  methods: 'post',
  token: 1111
})
axios('../1.json',{
  baseUrl: 'www.baidu.com',
  headers:{
    a:12
  }
})
// axios.get('url')
// axios('/url',{
//   method:'get',
//   data:{
//     a:1
//   }
// })
// a.post('/1.json')
// a.post(
//   '/1.json',
//   { a: 1, b: 2 },
//   { headers: { b: 2 } },
  
// )

// a.post('./1.json', {
//   a: 1,
//   b:5
// })



// get(url)
// get(url, { params: {}, headers: {} })
// get({ url: '', params: {}, headers: {} })


// post(url)
// post(url,{a:1,b:2})
// post({url,params:{},headers:{}})


// delete(url)
// delete(url,{params:{},headers:{}})
// delete({url,params:{},headers:{}})

// ------
//只有一个参数 string
// get(string)
// post(string)
// delete(string)

//只有一个参数 json
// get({...})
// post({...})
// delete({...})