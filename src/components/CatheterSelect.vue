
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCatheter } from '../store/useCatheter';
import { SelectItem } from '../store/useCreateSession';
import SelectModal from './SelectModal.vue';

const catheterStore = useCatheter()
const { catheterList } = storeToRefs(catheterStore)
const { addCatheter, removeCatheter } = catheterStore

defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()


</script>


<template>
    <a-form-item label="Катетеры">
        <SelectModal placeholder="Катетеры" modal-title="Катетеры" :list="catheterList" :value="value"
            :onDeleteItem="removeCatheter" :addItem="addCatheter" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
