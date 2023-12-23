<template>
    <div class="item-sidebar flex align-items-center br-4">
        <router-link class="item-sidebar-link flex align-items-center w-100 p-4" :to=item.Router>
            <div class="item-icon"></div>
            <div class="item-text p-l-8">{{ item.Caption }}</div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { ItemSidebar } from '@/interfaces';

const props = defineProps<{
    item: ItemSidebar,
}>();
</script>
<style lang="scss" scoped>
.item-sidebar {
    text-decoration: none;
    height: 40px;
    .item-icon{
        width: 32px;
        height: 32px;
        background-color: red;
    }
}
.item-sidebar:hover{
    background-color: gray;
}
</style>