<template>
    <div class="app-sidebar">
        <div class="app-sidebar-logo flex align-items-center justify-content-center">Logo</div>
        <div class="app-sidebar-items p-x-20">
            <div v-for="(item, index) in sidebarItems">
                <the-sidebar-item :item="item"></the-sidebar-item>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import i18n from '@/i18n/i18n';
import { ref } from 'vue';
import TheSidebarItem from './TheSidebarItem.vue';
import { ItemSidebar } from '@/interfaces';

const { t } = i18n.global;
const sidebarItems = ref<ItemSidebar[]>([{
    Caption: t('i18nCommon.OVERVIEW'),
    Router: '/overview',
}, {
    Caption: t('i18nCommon.EXPENDITURE'),
    Router: '/expenditure',
}, {
    Caption: t('i18nCommon.INCOME'),
    Router: '/income',
}, {
    Caption: t('i18nCommon.STATISTIC'),
    Router: '/statistic',
}])
</script>
<style lang="scss" scoped>
.app-sidebar {
    width: 200px;
    background-color: aquamarine;

    &-logo {
        height: 56px;
        background-color: cadetblue;
    }

    &-items {}
}
</style>