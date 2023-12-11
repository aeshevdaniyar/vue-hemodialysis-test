
<script setup lang="ts">
import type { Dayjs } from 'dayjs';
import { storeToRefs } from 'pinia';

import { usePostSessionAppointments } from '../store/usePostSessionAppointments';
import MedicationsSelect from './MedicationsSelect.vue';
import { DeleteOutlined } from '@ant-design/icons-vue'
import PathReceptionSelect from './PathReceptionSelect.vue';
import DrugsSelect from './DrugsSelect.vue';
const postSessionAppointmentsStore = usePostSessionAppointments()
const { availableNumbers, dateReception, drugsUnit, drugsValue, medications, pathOfReception, sessionNumbers, postSessionColumn, allPostSessionsData, isValid } = storeToRefs(postSessionAppointmentsStore)
const { setDateReception, setDrugsUnit, setPathOfReception, setDrugsValue, setMedications, setSessionNumbers, addPostSessionData, deleteSession } = postSessionAppointmentsStore


const onSubmit = () => {
    addPostSessionData()
}

</script>


<template>
    <a-typography-title :level="2">Назначения после сеанса</a-typography-title>

    <a-form layout="vertical" @submit.prevent="onSubmit">

        <MedicationsSelect :value="medications?.value" :onSelect="setMedications" />
        <a-flex wrap="wrap">
            <PathReceptionSelect :value="pathOfReception" :onSelect="setPathOfReception" />
            <DrugsSelect :drugsValue="drugsValue" :onSelect="setDrugsUnit" :selectValue="drugsUnit"
                :setDrugsValue="setDrugsValue" />
        </a-flex>
        <a-form-item label="Номера сеансов">
            <a-space wrap>
                <a-button v-for="(item) in availableNumbers" :type="sessionNumbers.includes(item) ? 'primary' : 'default'"
                    @click="() => setSessionNumbers(item)">{{ item }}</a-button>
            </a-space>
            <a-typography style="margin-top: 10px;">
                Количество сеансов: {{ sessionNumbers.length }}
            </a-typography>
        </a-form-item>
        <a-form-item label="Даты приема начало/конец">
            <a-range-picker :placeholder="['Начало приёма', 'Конец приёма']" :value="dateReception" @change="(dates: Dayjs[]) => {
                setDateReception(dates)
            }" />
        </a-form-item>

        <a-button html-type="submit" type="primary" :disabled="!isValid">
            Сформировать
        </a-button>
    </a-form>
    <a-table :columns="postSessionColumn" :data-source="allPostSessionsData" style="margin-top: 20px;" bordered
        size="middle" :scroll="{ x: 'calc(700px + 50%)', y: 240 }">

        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">

            </template>

            <template v-else-if="column.key === 'actions'">
                <a-button danger @click="() => {
                    deleteSession(record.key)
                }">
                    <DeleteOutlined />
                </a-button>
            </template>
        </template>
    </a-table>
</template>


<style scoped></style>
