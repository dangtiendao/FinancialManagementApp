import i18n from "@/i18n/i18n";
import { RouteRecordRaw } from "vue-router";

const { t } = i18n.global
const incomes: Array<RouteRecordRaw> = [
    {
        path: '/income',
        component: () => import('@/views/income/Income.vue'),
        meta: {
            Title: t('i18nCommon.INCOME')
        }
    }
]

export default incomes;