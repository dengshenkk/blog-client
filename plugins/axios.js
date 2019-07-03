import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.baseUrl
})


axios.interceptors.request.use((req) => {
  console.log(req)
  return req
})

axios.interceptors.response.use(res => {
  console.log(res)
  return res
})

export default axios
