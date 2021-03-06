import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/profile/:id',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue')
    },
    {
      path: '/newUser',
      name: 'newUser',
      component: () => import(/* webpackChunkName: "about" */ './views/NewUser.vue')
    },
    {
      path: '/finalExam',
      name: 'finalExam',
      component: () => import(/* webpackChunkName: "about" */ './views/finalExam.vue')
    }

  ]
})
