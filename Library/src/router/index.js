import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '@/views/HomeView.vue'
import AboutApp from '@/views/AboutView.vue'
import DashboardApp from '@/views/DashboardView.vue'

const routes = [
  {
    path: '/',
    component: HomeApp
  },
  {
    path: '/about',
    component: AboutApp
  },
  {
    path: '/dashboard',
    component: DashboardApp
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
