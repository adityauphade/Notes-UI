import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import('../views/Signup/Signup.vue')
  },
  {
    path: '/Reset/:token',
    name: 'Reset',
    component: () => import('../views/ResetPassword/Reset.vue')
  },
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword/Forgot.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
