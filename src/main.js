import Vue from 'vue'
import ElementUI from 'element-ui'

import '@/styles/index.scss' // 公共 css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon图标
import '@/permission' // 进度条

// 低版本兼容
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
