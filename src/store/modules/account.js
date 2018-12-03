import { accountApi } from '@/api'
import TokenFun from '@/utils/auth'
import store from 'store'

export default {
  state: {
    token: TokenFun.getToken(), // token
    userinfo: {}, // 用户信息
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USER_INFO: (state, userinfo) => {
      state.userinfo = userinfo
    }
  },
  actions: {
    login({ commit }, userInfo) {
      // 登录
      return new Promise((resolve, reject) => {
        accountApi.login({
          username: userInfo.username.trim(),
          password: userInfo.password
        }).then((res) => {
          if (res.code === 200) {
            // 存入用户信息
            TokenFun.setToken(res.data.token)
            store.set('userinfo', res.data)
            commit('SET_TOKEN', res.data.token)
            commit('SET_USER_INFO', res.data)
            resolve(res)
          } else {
            reject(res)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    loginOut({ commit }) {
      // 退出登录
      return new Promise(resolve => {
        // 清除用户信息
        TokenFun.removeToken()
        store.remove('userinfo')
        commit('SET_TOKEN', '')
        commit('SET_USER_INFO', '')
        resolve()
      })
    }
  }
}
