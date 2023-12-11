
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { SelectItem } from '../store/useCreateSession';
import { useNeedles } from '../store/useNeedles';
import SelectModal from './SelectModal.vue';

const needleStore = useNeedles()
const { needleList } = storeToRefs(needleStore)
const { addNeedle, removeNeedle } = needleStore

defineProps<{
    value: number | undefined,
    onSelect: (data: SelectItem) => void
}>()


</script>


<template>
    <a-form-item label="Иглы">
        <SelectModal placeholder="Игла" modal-title="Иглы" :list="needleList" :value="value" :onDeleteItem="removeNeedle"
            :addItem="addNeedle" :onSelect="onSelect" />
    </a-form-item>
</template>


<style scoped></style>
