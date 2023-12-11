
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCatheterType } from '../store/useCatheterType';
import { SelectItem } from '../store/useCreateSession';
import SelectModal from './SelectModal.vue';

const catheterTypeStore = useCatheterType()
const { catheterTypeList } = storeToRefs(catheterTypeStore)
const { addCatheterType, removeCatheterType } = catheterTypeStore

defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()


</script>


<template>
    <a-form-item label="Катетеры">
        <SelectModal placeholder="Катетеры" modal-title="Катетеры" :list="catheterTypeList" :value="value"
            :onDeleteItem="removeCatheterType" :addItem="addCatheterType" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
