
import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import store from './store'

//引入自定义指令修饰器
import toggle from './diretives/toggle'
import twotoggle from './diretives/twotoggle'
import showList from './diretives/showList'
Vue.directive('toggle', toggle)
Vue.directive('twotoggle', twotoggle)
Vue.directive('showlist', showList)

Vue.use(ElementUI)

Vue.prototype.$http = Axios
Axios.defaults.withCredentials = true
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
