import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Users from '../components/Users'
import Register from '../components/Register'
import Login from '@/components/Login'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/user/edit/:id', component: Register },
    { path: '/users', component: Users },
    { path: '/user/:id', component: User }
  ]
})
