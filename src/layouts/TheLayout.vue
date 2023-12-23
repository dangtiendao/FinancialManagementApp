<template>
    <div class="main-layout flex">
        <the-sidebar></the-sidebar>
        <div class="flex flex-column flex-1">
            <div class="nav-bar">
                <the-navbar></the-navbar>
            </div>
            <div class="router-view flex-1">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TheNavbar from './TheNavbar.vue';
import TheSidebar from './TheSidebar.vue';
import TheSidebarItem from './TheSidebarItem.vue';

</script>
<style lang="scss">
.main-layout {
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    background: var(--app-color-white);

    .nav-bar {
        height: 56px;
    }

    .router-view {
        background-color: antiquewhite;
    }
}
</style>