
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCreateSession } from '../store/useCreateSession';
import { useHemodialysisSession } from '../store/useHemodialysisSession';
import { usePostSessionAppointments } from '../store/usePostSessionAppointments';
import { useTreatmentHome } from '../store/useTreatmentHome';
import { useRecomendation } from '../store/useRecomendation';
import { computed } from 'vue';

const postSessionAppointmentsStore = usePostSessionAppointments()
const sessionStore = useCreateSession()
const treatmentHomeStore = useTreatmentHome()
const recomendationStore = useRecomendation()

const { allSessionDataList } = storeToRefs(sessionStore)
const { allPostSessionsData } = storeToRefs(postSessionAppointmentsStore)
const { allTreatmentHomeData } = storeToRefs(treatmentHomeStore)
const { recomendationList } = storeToRefs(recomendationStore)





const { saveHemodialysisSession, hemodialysisSessionList } = useHemodialysisSession()

const onClick = () => {
    saveHemodialysisSession({
        data: {
            postSesionData: allPostSessionsData.value,
            sessionData: allSessionDataList.value,
            treatmentHome: allTreatmentHomeData.value,
            recomendations: recomendationList.value
        }
    })
    sessionStore.clearData()
    postSessionAppointmentsStore.clearData()
    treatmentHomeStore.clearData()
    recomendationStore.clearData()
}

const isValid = computed(() => allSessionDataList.value.length > 0 && allPostSessionsData.value.length > 0 && allTreatmentHomeData.value.length > 0 && recomendationList.value.length > 0)

</script>


<template>
    <a-button size="large" @click="onClick" :disabled="!isValid">
        Сохранить назначения
    </a-button>
    {{ hemodialysisSessionList }}
</template>


<style scoped></style>
