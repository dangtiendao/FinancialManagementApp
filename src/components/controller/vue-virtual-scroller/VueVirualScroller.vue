<template>
    <div class="scroll-container" @scroll="handleScroll" ref="container">
        <div class="viewport" :style="{ height: items?.length * itemHeight + 'px' }">
            <div v-for="(item, index) in visibleItems" :key="index" class="item" :style="getItemStyle(index)">
                {{ item }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue';

const props = withDefaults(defineProps<{
    items: any[],
    itemHeight?: number,
    bufferSize?: number
}>(), {
    itemHeight: 50,
    bufferSize: 10,
})

const container = ref<HTMLElement | null>(null);
const visibleItems = ref<any[]>([])
/**
 * Style item
 * @param index 
 */
function getItemStyle(index: number) {
    return {
        height: `${props.itemHeight}px`,
        transform: `translateY(${index * props.itemHeight}px)`
    };
}

/**
 * Sự kiện scroll
 */
function handleScroll() {
    const offset = Math.floor(container.value!.scrollTop / props.itemHeight);
    const fromIndex = Math.max(0, offset - props.bufferSize);
    const toIndex = Math.min(
        props.items.length - 1,
        offset + Math.ceil(container.value!.clientHeight / props.itemHeight) + props.bufferSize
    );

    visibleItems.value = props.items.slice(fromIndex, toIndex + 1);
}

const containerHeight = ref(0)
/**
 * Cập nhật view
 */
function updateContainerHeight() {
    containerHeight.value = container.value!.clientHeight;
}

onMounted(() => {
    container.value!.addEventListener('scroll', handleScroll);
    // updateContainerHeight(); // Initialize the container height
    window.addEventListener('resize', updateContainerHeight);
})
watch(() => container.value, () => {
    containerHeight.value = container.value!.clientHeight;
}, { deep: true })
</script>
  
<style lang="scss">
.scroll-container {
    overflow-y: auto;
    height: 300px;
    /* Set the desired height of the scrollable container */
    border: 1px solid #ccc;
}

.viewport {
    position: relative;
}

.item {
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    // padding: 10px;
}
</style>
  