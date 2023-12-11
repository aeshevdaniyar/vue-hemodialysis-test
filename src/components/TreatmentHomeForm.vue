<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTreatmentHome } from '../store/useTreatmentHome';
import MedicationsSelect from './MedicationsSelect.vue';
import PathReceptionSelect from './PathReceptionSelect.vue';
import DrugsSelect from './DrugsSelect.vue';
import ReceptionFrequencySelect from './ReceptionFrequencySelect.vue';
import type { Dayjs } from 'dayjs';
import { DeleteOutlined } from '@ant-design/icons-vue'
const treatmentHomeStore = useTreatmentHome()
const { medications, drugsUnit, drugsValue, pathOfReception, dateReception, receptionFrequency, isValid, allTreatmentHomeData, treatmentColumn } = storeToRefs(treatmentHomeStore)
const { setMedications, setDrugsUnit, setDrugsValue, setPathOfReception, setDateReception, setReceptionFrequency, addTreatmentHomeData, deleteTreatmentHomeData } = treatmentHomeStore

const onSubmit = () => {
    addTreatmentHomeData()
}

</script>

<template>
    <a-typography-title :level="2">Лечение на дому</a-typography-title>
    <a-form @submit.prevent="onSubmit" layout="vertical">
        <MedicationsSelect :value="medications?.value" :onSelect="setMedications" />
        <a-flex wrap="wrap">
            <PathReceptionSelect :value="pathOfReception" :onSelect="setPathOfReception" />
            <DrugsSelect :drugsValue="drugsValue" :onSelect="setDrugsUnit" :selectValue="drugsUnit"
                :setDrugsValue="setDrugsValue" />
        </a-flex>

        <ReceptionFrequencySelect :value="receptionFrequency?.value" :onSelect="setReceptionFrequency" />
        <div>
            <a-range-picker :placeholder="['Начало приёма', 'Конец приёма']" :value="dateReception" @change="(dates: Dayjs[]) => {
                setDateReception(dates)
            }" />
        </div>

        <a-button html-type="submit" type="primary" style="margin-top: 15px;" :disabled="!isValid">
            Добавить
        </a-button>
    </a-form>
    <a-table :columns="treatmentColumn" :data-source="allTreatmentHomeData" style="margin-top: 20px;" bordered size="middle"
        :scroll="{ x: 'calc(700px + 50%)', y: 240 }">

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">

            </template>

            <template v-else-if="column.key === 'actions'">
                <a-button danger @click="() => {
                    deleteTreatmentHomeData(record.key)
                }">
                    <DeleteOutlined />
                </a-button>
            </template>
        </template>
    </a-table>
</template>

<style scoped></style>
