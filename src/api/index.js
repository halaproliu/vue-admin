import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

api.defaults.baseURL = '/api'

api.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

api.interceptors.response.use(
  response => {
    // Do something with response data
    return response
  },
  err => {
    // Do something with response error
    return Promise.reject(err)
  }
)

export default api
