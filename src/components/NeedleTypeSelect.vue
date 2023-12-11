
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { SelectItem } from '../store/useCreateSession';
import { useNeedleType } from '../store/useNeedleType';
import SelectModal from './SelectModal.vue';

const needleTypeStore = useNeedleType()
const { needleTypeList } = storeToRefs(needleTypeStore)
const { addNeedleType, removeNeedleType } = needleTypeStore

defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()


</script>


<template>
    <a-form-item label="Тип иглы">
        <SelectModal placeholder="Тип иглы" modal-title="Тип иглы" :list="needleTypeList" :value="value"
            :onDeleteItem="removeNeedleType" :addItem="addNeedleType" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
