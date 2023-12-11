<script setup lang="ts">
import CreateSessionForm from './components/CreateSessionForm.vue';
import PostSessionAppointmentsForm from './components/PostSessionAppointmentsForm.vue';
import TreatmentHomeForm from './components/TreatmentHomeForm.vue';
import RecomendationForm from './components/RecomendationForm.vue';
import SaveHemodialysisSessionBtn from './components/SaveHemodialysisSessionBtn.vue';
</script>

<template>
  <div style="padding: 15px;">
    <a-typography-title :level="2">Сеанс гемодиализа</a-typography-title>
    <CreateSessionForm />
    <a-divider />
    <PostSessionAppointmentsForm />
    <a-divider />
    <TreatmentHomeForm />
    <a-divider />
    <RecomendationForm />
    <a-divider />
    <SaveHemodialysisSessionBtn />
  </div>
</template>

<style scoped></style>
