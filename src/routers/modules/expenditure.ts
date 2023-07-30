import i18n from "@/i18n/i18n";
import { RouteRecordRaw } from "vue-router";

const { t } = i18n.global
const expenditure: Array<RouteRecordRaw> = [
    {
        path: '/statistic',
        component: () => import('@/views/expenditure/Expenditure.vue'),
        meta: {
            Title: t('i18nCommon.EXPENDITURE')
        }
    }
]

export default expenditure;