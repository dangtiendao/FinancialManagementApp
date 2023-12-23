import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import overview from './modules/overview'
import incomes from './modules/income'
import expenditure from './modules/expenditure'
import statistic from './modules/statistic'
import i18n from '@/i18n/i18n'

const { t } = i18n.global

const routers: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/overview',
    component: () => import ('@/layouts/TheLayout.vue'),
    children: [...overview, ...incomes, ...expenditure, ...statistic],
    meta: {
      Title: t('i18nCommon.OVERVIEW')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/page/Login.vue')
  },
  {
    path: '/no-permissions',
    name: '403',
    component: () => import('@/page/403.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/page/404.vue')

  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routers
})

export default router;