import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('@/views/CvView.vue')
    },
    {
      path: '/portfolio/',
      name: 'portfolio',
      component: () => import('@/views/PortfolioView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/apps/timer-earn',
      name: 'app_time_earn',
      component: () => import('@/views/apps/TimerEarn.vue')
    },
  ]
})

export default router
