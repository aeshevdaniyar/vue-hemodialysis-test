
<script setup lang="ts">
import SelectModal from './SelectModal.vue';
import { storeToRefs } from 'pinia';
import { useDialyzer } from '../store/useDialyzer';
import { SelectItem } from '../store/useCreateSession';

const dialyzerStore = useDialyzer()
const { dialyzerList } = storeToRefs(dialyzerStore)
const { addDialyzer, removeDialyzer } = dialyzerStore

defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()


</script>


<template>
    <a-form-item label="Диализатор">
        <SelectModal placeholder="Диализаторы" modal-title="Диализаторы" :list="dialyzerList" :value="value"
            :onDeleteItem="removeDialyzer" :addItem="addDialyzer" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
