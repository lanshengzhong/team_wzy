import request from '@/utils/request'

// 用户相关

export default {
  // 发送验证码
  sendcode(data) {
    return request({
      url: '/system/sms',
      method: 'post',
      data
    })
  },
  // 手机登录
  phonelogin(data) {
    return request({
      url: '/login/phone',
      method: 'post',
      data
    })
  },
  // 邀请注册 发送验证码
  invitesendcode(data) {
    return request({
      url: '/system/invite_register_sms',
      method: 'post',
      data
    })
  },
  // 邀请注册 手机登录
  invitephonelogin(data) {
    return request({
      url: '/login/h5_invite',
      method: 'post',
      data
    })
  },
  // 邀请注册 获取用户信息
  inviteuserinfo(data) {
    return request({
      url: `activity/invite_register/get_info/${data.id}`,
      method: 'post',
      data
    })
  }
}
