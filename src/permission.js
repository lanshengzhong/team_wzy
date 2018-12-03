import router from './router'
import $store from './store'
import store from 'store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import TokenFun from '@/utils/auth' // token

// 注意 store $store

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach((to, from, next) => {
  // 开始Progress
  NProgress.start()
  if (TokenFun.getToken()) {
    // 本地用户信息
    if (store.get('userinfo')) {
      $store.commit('SET_USER_INFO', store.get('userinfo'))
    }
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 判断是否已生成可访问的路由表
      if ($store.getters.addRouters.length === 0) {
        // 生成可访问的路由表
        $store.dispatch('GenerateRoutes', $store.getters.menu).then(() => {
          // 动态添加可访问路由表
          router.addRoutes($store.getters.addRouters)
          // hack方法 确保addRoutes已完成
          next({ ...to, replace: true })
        })
      } else {
        next()
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 结束Progress
  NProgress.done()
})
