import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/src/views/AboutView.vue',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/src/views/ProductsView.vue',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/src/views/LogInView.vue',
    name: 'login',
    component: () => import('../views/LogInView.vue')
  },
  {
    path: '/src/views/SignUpView.vue',
    name: 'signup',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/src/views/ContactView.vue',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/src/views/AdminView.vue',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
