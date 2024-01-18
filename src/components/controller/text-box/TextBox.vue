<template>
	<div class="td-controler">
		<dx-text-box v-bind="textBoxConfig" v-model="internalValue" :onValueChanged="handleValueChanged"></dx-text-box>
	</div>
</template>
<script setup lang="ts">
import { megerObjtect } from '@/utils/functions';
import { DxTextBox } from 'devextreme-vue';
import { TextBoxConfig } from '.';
import { ref, watch } from 'vue';
import { NativeEventInfo } from 'devextreme/events';
import { ValueChangedInfo } from 'devextreme/ui/editor/editor';
import { ValueControlChangeInfo } from '../field';
const props = defineProps<{
	config: TextBoxConfig,
	modelValue?: string,
	isSubmit?: boolean,
}>();
const emits = defineEmits<{
	(e: 'update:modelValue', value: string): void
	(e: 'value-change', value: ValueControlChangeInfo): void
}>()
const defaultConfig: TextBoxConfig = {

}

const { onValueControlChange } = props.config
const internalValue = ref(props.modelValue);
const textBoxConfig = megerObjtect(props.config, defaultConfig)

/**
 * Xử lý khi value thay đổi
 * @param e 
 */
function handleValueChanged(e: NativeEventInfo<DxTextBox, Event> & ValueChangedInfo) {
	emits("update:modelValue", e.value)
	emits("value-change", { value: e.value })

	if (typeof onValueControlChange == 'function') {
		onValueControlChange({ value: e.value });
	}
}

watch(() => props.isSubmit, (val) => {

}, { deep: true })

</script>
<style lang="scss"></style>../td-field