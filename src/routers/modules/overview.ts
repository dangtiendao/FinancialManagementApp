import i18n from "@/i18n/i18n";
import { RouteRecordRaw } from "vue-router";

const { t } = i18n.global
const overview: Array<RouteRecordRaw> = [
    {
        path: '/overview',
        component: () => import('@/views/overview/Overview.vue'),
        meta: {
            Title: t('i18nCommon.OVERVIEW')
        }
    }
]

export default overview;