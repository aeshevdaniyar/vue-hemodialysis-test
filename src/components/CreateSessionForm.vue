<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCreateSession } from '../store/useCreateSession';
import AnticoagulationSelect from './AnticoagulationSelect.vue';
import CatheterSelect from './CatheterSelect.vue';
import CatheterTypeSelect from './CatheterTypeSelect.vue';
import ConcentratorSelect from './ConcentratorSelect.vue';
import DialyzerSelect from './DialyzerSelect.vue';
import NeedleSelect from './NeedleSelect.vue';
import NeedleTypeSelect from './NeedleTypeSelect.vue';

import { AuditOutlined, ExperimentOutlined, FundProjectionScreenOutlined, QuestionCircleOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
const sessionStore = useCreateSession()
const { deviceProgram, dialyzer, concentrator, concentratorVolume, injectionType, needle, needleType, bicarbonateValue, bicarbonateUnit, patientDryWeight, anticoagulation, volume, catheter, catheterType, isValid, allSessionDataList } = storeToRefs(sessionStore)
const { setDeviceProgram, setDialyzer, setConcentrator, setInjectionType, setConcentratorVolume, setNeedle, setNeedleType, setBicarbonateValue, setBicarbonateUnit, setPatientDryWeight, setAnticoagulation, setVolume, setCatheter, setCatheterType, addSessionData } = sessionStore
const bicarbonateUnitOptions = ref([
    { value: 1, label: 'гр' },
    { value: 2, label: 'л' },

]);

const onSubmit = () => {
    addSessionData()
}
</script>

<template>
    <a-typography-title :level="2">Назначения сеанса гемодиализа</a-typography-title>
    <a-form layout="vertical" @submit.prevent="onSubmit">
        <a-space direction="vertical " size="8">
            <a-form-item label="Программа аппарата">
                <a-radio-group v-model:value="deviceProgram" button-style="solid">
                    <a-radio-button @click="() => {
                        setDeviceProgram('HD')
                    }" value="HD">HD</a-radio-button>
                    <a-radio-button @click="() => {
                        setDeviceProgram('HDF')
                    }" value="HDF">HDF</a-radio-button>
                    <a-radio-button @click="() => {
                        setDeviceProgram('UF')
                    }" value="UF">UF</a-radio-button>
                </a-radio-group>
            </a-form-item>

            <DialyzerSelect :value="dialyzer?.value" :onSelect="setDialyzer" />
            <a-flex gap="small">
                <ConcentratorSelect :value="concentrator?.value" :onSelect="setConcentrator" />
                <a-form-item label="Объем л.">
                    <a-input style="width: 100px;" @input="(event: any) => {
                        const eventTarget = event.target as HTMLInputElement
                        setConcentratorVolume(Number(eventTarget.value.replace(/[^0-9]/g, '')))
                    }" :value="concentratorVolume" suffix="л." />
                </a-form-item>
            </a-flex>
            <a-form-item label="Тип инъекции">
                <a-radio-group v-model:value="injectionType" button-style="solid">
                    <a-radio-button @click="() => {
                        setInjectionType('needle')
                    }" value="needle">Игла</a-radio-button>
                    <a-radio-button @click="() => {
                        setInjectionType('catheter')
                    }" value="catheter">Катетер</a-radio-button>
                </a-radio-group>
            </a-form-item>
            <a-flex v-if="injectionType == 'needle'">
                <NeedleSelect :value="needle?.value" :onSelect="setNeedle" />
                <NeedleTypeSelect :value="needleType?.value" :onSelect="setNeedleType" />
            </a-flex>
            <a-flex v-if="injectionType == 'catheter'">
                <CatheterSelect :value="catheter?.value" :onSelect="setCatheter" />
                <CatheterTypeSelect :value="catheterType?.value" :onSelect="setCatheterType" />
            </a-flex>
            <a-flex align="flex-end" gap="small" wrap="wrap">
                <a-form-item label="Бикарбонат">
                    <a-input :value="bicarbonateValue" @input="(event: any) => {
                        const eventTarget = event.target as HTMLInputElement
                        setBicarbonateValue(Number(eventTarget.value.replace(/[^0-9]/g, '')))
                    }">
                        <template #addonAfter>
                            <a-select :value="bicarbonateUnit?.value" placeholder="Бикарбонат"
                                :options="bicarbonateUnitOptions" @change="(data: number) => {
                                    const name = bicarbonateUnitOptions.filter((option) => data == option.value)[0].label
                                    setBicarbonateUnit({
                                        value: data,
                                        name,
                                    })
                                }" />
                        </template>
                    </a-input>
                </a-form-item>

                <a-form-item label="Сухой Вес пациента">
                    <a-input style="width: 100px;" @input="(event: any) => {
                        const eventTarget = event.target as HTMLInputElement
                        setPatientDryWeight(Number(eventTarget.value.replace(/[^0-9]/g, '')))
                    }" :value="patientDryWeight" suffix="кг" />
                </a-form-item>
                <AnticoagulationSelect :value="anticoagulation?.value" :onSelect="setAnticoagulation" />
                <a-form-item label="Объем">
                    <a-input @input="(event: any) => {
                        const eventTarget = event.target as HTMLInputElement
                        setVolume(Number(eventTarget.value.replace(/[^0-9]/g, '')))
                    }" :value="volume" suffix="ед" />
                </a-form-item>
            </a-flex>


            <a-button html-type="submit" type="primary" :disabled="!isValid">
                Сформировать сеанс
            </a-button>
        </a-space>

    </a-form>
    <a-space direction="vertical">
        <a-card v-for="(data) in allSessionDataList" title="Назначения сеанса гемодиализа" style=" margin-top: 20px;">
            <a-flex wrap="wrap" gap="small">
                <a-space style="font-size: 30px;">
                    <FundProjectionScreenOutlined />
                    <a-typography :level="4" strong>
                        {{ data.deviceProgram }}
                    </a-typography>
                </a-space>
                <a-space style="font-size: 30px;">
                    <ExperimentOutlined />
                    <a-typography :level="4" strong>
                        {{ data.concentrator }} {{ concentratorVolume }}
                    </a-typography>
                </a-space>
                <a-space style="font-size: 30px;">
                    <AuditOutlined />
                    <a-typography :level="4" strong>
                        {{ data.patientDryWeight }} кг
                    </a-typography>
                </a-space>
                <a-space style="font-size: 30px;">
                    <ExperimentOutlined />
                    <a-typography :level="4" strong>
                        {{ data.anticoagulation }} {{ data.volume }} ед.
                    </a-typography>
                </a-space>
                <a-space style="font-size: 30px;">
                    <ExperimentOutlined />
                    <a-typography :level="4" strong>
                        {{ data.bicarbonateValue }} {{ data.bicarbonateUnit }}.
                    </a-typography>
                </a-space>
                <a-space style="font-size: 30px;">
                    <QuestionCircleOutlined />
                    <a-typography :level="4" strong>
                        {{ data.dialyzer }}
                    </a-typography>
                </a-space>
                <a-space style="font-size: 30px;">
                    <QuestionCircleOutlined />
                    <a-typography :level="4" strong>
                        {{ data.injectionType == "needle" ? data.needle : data.catheter }} {{ data.injectionType == "needle"
                            ? data.needleType : data.catheterType }}
                    </a-typography>
                </a-space>
            </a-flex>

        </a-card>
    </a-space>
</template>

<style scoped></style>
