
<script setup lang="ts">
import SelectModal from './SelectModal.vue';
import { storeToRefs } from 'pinia';
import { useReceptionFrequency } from '../store/useReceptionFrequency'
import { SelectItem } from '../store/useCreateSession';


const receptionFrequencyStore = useReceptionFrequency()
const { receptionFrequencyList } = storeToRefs(receptionFrequencyStore)
const { addReceptionFrequency, removeReceptionFrequency } = receptionFrequencyStore
defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()
</script>


<template>
    <a-form-item label="Кратность приема">
        <SelectModal placeholder="Кратность приема" modal-title="Кратность приема" :list="receptionFrequencyList"
            :value="value" :onDeleteItem="removeReceptionFrequency" :addItem="addReceptionFrequency" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
