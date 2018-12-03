import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/pages/layout/Layout'

// 路由模块
import boardRouter from './modules/board'

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/

// 默认加载的路由 （包含登录，主页框架等）
export const constantRouterMap = [
  { path: '/login', component: () => import('@/pages/login/index'), hidden: true },
  { path: '/404', component: () => import('@/pages/404'), hidden: true },

  // 首页
  {
    path: '',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    hidden: false,
    children: [{
      path: 'home',
      component: () => import('@/pages/index/index'),
      meta: { title: '首页', icon: 'home' }
    }]
  }
]

export default new Router({
  // mode: 'history', // 需要后端支持
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// 异步加载的路由 （根据用户权限判断）
export const asyncRouterMap = [
  boardRouter,
  { path: '*', redirect: '/404', hidden: true }
]
