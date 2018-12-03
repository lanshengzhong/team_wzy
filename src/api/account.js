import request from '@/utils/request'

// 用户相关

export default {
  // 用户名登录
  login(data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  }
}
