import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/today',
      name: 'Today',
      component: () => import('../views/Today.vue')
    },
    {
      path: '/stats',
      name: 'Stats',
      component: () => import('../views/Stats.vue')
    },
    {
      path: '/health',
      name: 'Health',
      component: () => import('../views/Health.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue')
    }
  ]
})

export default router