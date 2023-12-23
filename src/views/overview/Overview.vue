<template>
    <div>
    </div>
</template>
<script setup lang="ts">
// import { VueVirualScroller } from '@/components/controller';

import { ref } from 'vue';
const randomArray = ref< number[]>([]);
for (let i = 0; i < 1000; i++) {
    const randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    randomArray.value.push(randomNum);
} 
console.log(randomArray.value);

</script>
<style lang="scss"></style>