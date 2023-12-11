
<script setup lang="ts">
import { ref } from 'vue';
import { SelectItem } from '../store/useCreateSession';
const props = defineProps<{
    selectValue: SelectItem | null,
    onSelect: (value: SelectItem) => void
    drugsValue: number,
    setDrugsValue: (value: number) => void
}>()

const drugsUnitOptions = ref([
    { value: 1, label: 'мкг' },
    { value: 2, label: 'мл' },
    { value: 3, label: 'мг/кг' },
])



const onSelect = (value: SelectItem) => {
    props.onSelect(value)
}

</script>


<template>
    <a-form-item label="Дозировка">
        <a-input :value="drugsValue" @input="(event: any) => {
            const eventTarget = event.target as HTMLInputElement
            setDrugsValue(Number(eventTarget.value.replace(/[^0-9]/g, '')))
        }">
            <template #addonAfter>
                <a-select :value="selectValue?.value" style="width: 80px" :options="drugsUnitOptions" @change="(data: number) => {
                    const name = drugsUnitOptions.filter((option) => data == option.value)[0].label
                    onSelect({
                        value: data,
                        name,
                    })
                }" placeholder="дозировка" />

            </template>
        </a-input>
    </a-form-item>
</template>


<style scoped></style>
