import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import ('./views/Admin.vue')
  },
  {
    path: '/ee',
    name: 'easterEgg',
    component: () => import('./views/EasterEgg.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
