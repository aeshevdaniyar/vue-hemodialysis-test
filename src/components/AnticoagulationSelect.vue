
<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { SelectItem } from '../store/useCreateSession';
import SelectModal from './SelectModal.vue';
import { useAnticoagulation } from '../store/useAnticoagulation';

const anticoagulationStore = useAnticoagulation()
const { anticoagulantList } = storeToRefs(anticoagulationStore)
const { addAnticoagulant, removeAnticoagulant } = anticoagulationStore

defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()


</script>


<template>
    <a-form-item label="Антикоагуляция">
        <SelectModal placeholder="Антикоагуляция" modal-title="Антикоагуляция" :list="anticoagulantList" :value="value"
            :onDeleteItem="removeAnticoagulant" :addItem="addAnticoagulant" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
