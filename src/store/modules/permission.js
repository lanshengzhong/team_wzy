import { asyncRouterMap, constantRouterMap } from '@/router'

/**
 * 通过meta.funcId判断是否与当前用户权限匹配
 * @param functionIds
 * @param route
 */
function hasPermission(functionIds, route) {
  if (route.meta && route.meta.funcId) {
    return functionIds.some(functionId => route.meta.funcId === functionId)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param functionIds
 */
function filterAsyncRouter(asyncRouterMap, functionIds) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(functionIds, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, functionIds)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    isLogin: false,
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    DELETE_ROUTERS: (state) => {
      state.addRouters = []
      state.routers = []
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const accessedRouters = filterAsyncRouter(asyncRouterMap, data)
        commit('SET_ROUTERS', [])
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
    DeleteRoutes({ commit }) {
      return new Promise(resolve => {
        commit('DELETE_ROUTERS')
        resolve()
      })
    }

  }
}

export default permission
