<template>
  <div>
    Demo
  </div>
  <div>
    <text-box :config="{
      width: '100px',
      onValueControlChange: handleValueTextBoxChanged

    }" v-model:model-value="modelTextBox"
    :is-submit="isSubmit"></text-box>

  </div>
</template>
<script setup lang="ts">
import { TextBox, ValueControlChangeInfo } from '@/components/controller';
import { ref, watch } from 'vue';

//#region chung
const isSubmit = ref<boolean>(false)
//#endregion 

//#region TextBox
const modelTextBox = ref<string>();

/**
 * Xử lý khi giá trị text box thay đổi
 * @param e 
 * @createdBby: dtdao 10.01.2024
 */
function handleValueTextBoxChanged(e: ValueControlChangeInfo) {
  //TODO:
}


watch(() => modelTextBox.value, () => {
  //TODO:
}, { deep: true })
//#endregion 

</script>
<style lang="scss"></style>