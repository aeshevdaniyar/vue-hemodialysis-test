
<script setup lang="ts">
import { ref } from 'vue';
import { SelectItem } from '../store/useCreateSession';
const props = defineProps<{
    value: SelectItem | null,
    onSelect: (value: SelectItem) => void
}>()

const pathOfReceptionOptions = ref([
    { value: 1, label: 'Перерольно' },
    { value: 2, label: 'Подкожно' },
    { value: 3, label: 'Аретериально' },
]);


const onSelect = (value: SelectItem) => {
    props.onSelect(value)
}



</script>


<template>
    <a-form-item label="Путь приема">
        <a-select :value="value?.value" placeholder="Путь приема" style="width: 200px" :options="pathOfReceptionOptions" @change="(data: number) => {
            const name = pathOfReceptionOptions.filter((option) => data == option.value)[0].label
            onSelect({
                value: data,
                name,
            })
        }"></a-select>
    </a-form-item>
</template>


<style scoped></style>
