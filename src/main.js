// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuex from 'vuex'
import Element from 'element-ui'
import { store } from './store'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueSession from 'vue-session'

// import 'element-ui/lib/theme-chalk/index.css'
import 'element-theme-default/lib/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueSession)
Vue.use(BootstrapVue);
Vue.use(Vuex)
Vue.use(Element)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.http.options.root = 'http://localhost:3001';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
