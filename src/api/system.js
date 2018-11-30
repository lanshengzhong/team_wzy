import request from '@/utils/request'

// 系统 （初始化、分享）

export default {
  // 分享
  share(data) {
    return request({
      url: `/system/share`,
      method: 'post',
      data
    })
  }
}
