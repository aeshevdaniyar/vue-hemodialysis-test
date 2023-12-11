<script setup lang="ts">
import { UserOutlined } from '@ant-design/icons-vue'
import CurrentTime from './CurrentTime.vue';
import { storeToRefs } from 'pinia';
import { useUser } from '../store/useUser'
import { useRecomendation } from '../store/useRecomendation'
const recomendationStore = useRecomendation()
const userStore = useUser()
const { userData } = storeToRefs(userStore)
const { isValid, patientRecommendationText, recommendationstoPatient } = storeToRefs(recomendationStore)
const { addRecomendation, setPatientRecommendationText, setRecommendationstoPatient } = recomendationStore
console.log(patientRecommendationText);

const onSubmit = () => {
    addRecomendation()
}
</script>

<template>
    <a-typography-title :level="2">Рекомендации</a-typography-title>
    <a-form @submit.prevent="onSubmit" layout="vertical">
        <a-space direction="vertical" style="width: 100%;">
            <a-flex gap="middle">
                <a-input :value="patientRecommendationText" @input="(event: any) => {
                    const eventTarget = event.target as HTMLInputElement
                    setPatientRecommendationText(eventTarget.value)
                }" placeholder="Текст рекомендации пациенту" />
            </a-flex>
            <a-textarea :value="recommendationstoPatient" @input="(event: any) => {
                const eventTarget = event.target as HTMLInputElement
                setRecommendationstoPatient(eventTarget.value)
            }" placeholder="Рекомендации лечащего врача пациенту" />
            <a-flex gap="middle">
                <CurrentTime />
                <a-space>
                    <UserOutlined />
                    <a-typography strong>
                        {{ userData.fullName }}
                    </a-typography>
                </a-space>
                <a-typography strong>
                    {{ userData.position }}
                </a-typography>
            </a-flex>
            <a-button html-type="submit" type="primary" :disabled="!isValid">
                Сохранить рекомендации
            </a-button>
        </a-space>

    </a-form>
</template>

<style scoped></style>
 