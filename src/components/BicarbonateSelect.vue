
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useBicarbonate } from '../store/useBicarbonate';
import { SelectItem } from '../store/useCreateSession';
import SelectModal from './SelectModal.vue';

const bicarbonateStore = useBicarbonate()
const { bicarbonateList } = storeToRefs(bicarbonateStore)
const { addBicarbonate, removeBicarbonate } = bicarbonateStore

defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()


</script>


<template>
    <a-form-item label="Бикарбонат">
        <SelectModal placeholder="Бикарбонат" modal-title="Бикарбонат" :list="bicarbonateList" :value="value"
            :onDeleteItem="removeBicarbonate" :addItem="addBicarbonate" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
