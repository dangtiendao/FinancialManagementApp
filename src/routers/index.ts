import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'',
      redirect:'/home',
    },
    {
      path: '/home',
      component: () => import('@/views/home/Home.vue'),
    },
    {
      path: '/expenditure',
      component: () => import('@/views/expenditure/Expenditure.vue'),
    },
    {
      path: '/statistic',
      component: () => import('@/views/statistic/Statistic.vue'),
    },
    {
      path: '/income',
      component: () => import('@/views/income/Income.vue'),
    },
  ],
})