import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: () => import('../views/Signup/Signup.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
