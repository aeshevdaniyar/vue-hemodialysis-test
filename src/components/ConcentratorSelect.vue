
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useConcentrator } from '../store/useConcentrator';
import { SelectItem } from '../store/useCreateSession';
import SelectModal from './SelectModal.vue';

const concentratorStore = useConcentrator()
const { concentratorList } = storeToRefs(concentratorStore)

console.log(concentratorList);

const { addConcentrator, removeConcentrator } = concentratorStore
defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()


</script>


<template>
    <a-form-item label="Концентратор">
        <SelectModal placeholder="Концентраторы" modal-title="Концентраторы" :list="concentratorList" :value="value"
            :onDeleteItem="removeConcentrator" :addItem="addConcentrator" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
