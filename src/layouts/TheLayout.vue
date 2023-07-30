<template>
    <div class="flex">
        The Layout
        <the-sidebar></the-sidebar>
        <div>
            <div>
                <the-navbar></the-navbar>
            </div>
            <div>
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
<style lang="scss"></style>