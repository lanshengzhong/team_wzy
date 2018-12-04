import Cookies from 'js-cookie'
import { accountApi } from '@/api'
import TokenFun from '@/utils/auth'
import store from 'store'

export default {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    token: TokenFun.getToken(), // token
    userinfo: {}, // 用户信息
    roles: []
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
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
    ToggleSideBar: ({ commit }) => {
      // 切换导航
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      // 隐藏导航
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      // 切换设备
      commit('TOGGLE_DEVICE', device)
    },
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
            // 获取路由权限
            resolve(res)
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
