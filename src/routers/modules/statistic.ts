import i18n from "@/i18n/i18n";
import { RouteRecordRaw } from "vue-router";

const { t } = i18n.global
const statistic: Array<RouteRecordRaw> = [
    {
        path: '/statistic',
        component: () => import('@/views/statistic/Statistic.vue'),
        meta: {
            Title: t('i18nCommon.STATISTIC')
        }
    }
]

export default statistic;