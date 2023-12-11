
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { SelectItem } from '../store/useCreateSession';
import { useMedication } from '../store/useMedications';
import SelectModal from './SelectModal.vue';

const medicationStore = useMedication()
const { medicationList } = storeToRefs(medicationStore)
const { addMedication, removeMedication } = medicationStore

defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()


</script>


<template>
    <a-form-item label="Лекарственный препарат">
        <SelectModal placeholder="Лекарственный препарат" modal-title="Лекарственный препарат" :list="medicationList"
            :value="value" :onDeleteItem="removeMedication" :addItem="addMedication" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
