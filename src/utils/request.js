import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import TokenFun from '@/utils/auth'
import { Message, MessageBox } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: 'https://lab.hzhui.com/api/partner', // api的base_url
  timeout: 30000 // 请求超时时间
})
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// request拦截器
service.interceptors.request.use(config => {
  config.data = qs.stringify({
    token: TokenFun.getToken(),
    ...config.data
  })
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 405) {
      // 登录
      MessageBox.confirm('你已被登出，请重新登录', '确定登出', {
        showClose: false,
        confirmButtonText: '重新登录',
        type: 'warning'
      }).then(() => {
        store.dispatch('loginOut').then(() => {
          // 为了重新实例化vue-router对象 避免bug
          window.location.reload()
        })
      }).catch(() => {
        store.dispatch('loginOut').then(() => {
          // 为了重新实例化vue-router对象 避免bug
          window.location.reload()
        })
      })
    } else if (res.code === 500) {
      // 500 网络错误(服务端错误)
      Message({
        message: '服务器出错了，请稍等',
        type: 'error',
        duration: 2 * 1000
      })
    } else if (res.code === 400 || res.code === 422) {
      // 400吐司
      Message({
        message: res.msg,
        type: 'error',
        duration: 2 * 1000
      })
    }
    return res
  },
  error => {
    Message({
      message: '服务器出错了，请稍等',
      type: 'error',
      duration: 2 * 1000
    })
    console.log('error' + error)
    return Promise.reject(error)
  }
)

export default service
