import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '@/views/HomeView.vue'
import AboutApp from '@/views/AboutView.vue'
import DashboardApp from '@/views/DashboardView.vue'

import UserLibrary from '@/components/UserLibrary.vue'
import UserProfile from '@/components/UserProfile.vue'

import useUserStore from '@/stores/user'

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeApp
  },
  {
    name: 'about',
    path: '/about',
    component: AboutApp
  },
  {
    name: 'dashboard',
    path: '/dashboard-user',
    component: DashboardApp,
    meta: {
      requiresAuth: true
    },
    children: [
      { name: 'profile', path: 'profile', component: UserProfile },
      { name: 'library', path: 'library', component: UserLibrary }
    ]
  },
  {
    path: '/dashboard',
    redirect: { name: 'dashboard' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }

  const store = useUserStore()

  if (store.userLoggedIn) {
    next()
  } else {
    next({ name: 'home' })
  }
})

export default router
