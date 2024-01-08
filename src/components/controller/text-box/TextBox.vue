<template>
    <div>
        <dx-text-box>

        </dx-text-box>
    </div>
</template>
<script setup lang="ts">
import { DxTextBox } from 'devextreme-vue';
import { TextBoxConfig } from '.';
import {megerObjtect} from '@/'
const props = defineProps<{
    config: TextBoxConfig;
}>();

const defaultConfig : TextBoxConfig = {

}

const configTextBox = megerObjtect(props.config,)
</script>
<style lang="scss">
#login{
}
</style>