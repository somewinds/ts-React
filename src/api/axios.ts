import axios from 'axios'
import { getSession, getCookie } from '../tool/tool'

const ONLINE = /linhuiba/ig

let url
if (process.env.NODE_ENV === 'development') {
  url = process.env.BASE_API
} else if (process.env.NODE_ENV === 'production') {
  if (ONLINE.test(window.location.host)) {
    url = process.env.BASE_API
  } else {
    url = process.env.TEST_BASE_API
  }
}
let Ax = axios.create({
  baseURL: url,
  timeout: 50000,
  headers: {
    "Content-Type" : "application/json"
  }
})
Ax.interceptors.request.use(function (config) {
  let apikey = ''
  let key = getSession('key')
  if (key !== null) {
    apikey = key.slice(2 , -8)
  } else {
    apikey = (getCookie("LINHUIBA_KEY") || '').slice(2, -8)
  }
  if (apikey) {
    config.headers = Object.assign(config.headers, {Authorization: `Bearer${apikey}`, client: 'wap'})
  } else {
    config.headers = Object.assign(config.headers, {Authorization: 'Bearer'})
  }
  
  return config
}, function (err) {
  return Promise.reject(err)
})
Ax.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
});

export default Ax
