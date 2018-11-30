import { accountApi } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'
import store from 'store'

export default {
  state: {
    token: getToken(), // token
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
    // 登录
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        accountApi.login(userInfo.username.trim(), userInfo.password).then((res) => {
          if (res.code === 200) {
            setToken(res.data.token)
            store.set('userinfo', res.data)
            commit('SET_TOKEN', res.data.token)
            commit('SET_USER_INFO', res.data)
            resolve()
          } else {
            reject()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 退出登录
    loginOut({ commit }) {
      return new Promise(resolve => {
        removeToken()
        store.remove('userinfo')
        commit('SET_TOKEN', '')
        commit('SET_USER_INFO', '')
        resolve()
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      // return new Promise((resolve, reject) => {
      //   getInfo(state.token).then(response => {
      //     const data = response.data
      //     if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
      //       commit('SET_ROLES', data.roles)
      //     } else {
      //       reject('getInfo: roles must be a non-null array !')
      //     }
      //     commit('SET_NAME', data.name)
      //     commit('SET_AVATAR', data.avatar)
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    }
  }
}

