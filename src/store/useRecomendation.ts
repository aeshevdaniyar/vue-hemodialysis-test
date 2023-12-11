import { defineStore } from "pinia";
import { computed, ref } from "vue";
export interface RecomendationForm {
  patientRecommendationText: string;
  recommendationstoPatient: string;
}
export const useRecomendation = defineStore("recomendation", () => {
  const recomendationForm = ref<RecomendationForm>({
    patientRecommendationText: "",
    recommendationstoPatient: "",
  });
  const recomendationList = ref<RecomendationForm[]>([]);
  const patientRecommendationText = computed(
    () => recomendationForm.value.patientRecommendationText
  );
  const recommendationstoPatient = computed(
    () => recomendationForm.value.recommendationstoPatient
  );

  const isValid = computed(
    () =>
      recomendationForm.value.patientRecommendationText.length != 0 &&
      recomendationForm.value.recommendationstoPatient.length != 0
  );
  const setPatientRecommendationText = (value: string) => {
    recomendationForm.value.patientRecommendationText = value;
  };

  const setRecommendationstoPatient = (value: string) => {
    recomendationForm.value.recommendationstoPatient = value;
  };

  const addRecomendation = () => {
    recomendationList.value.push(recomendationForm.value);
    recomendationForm.value.patientRecommendationText = "";
    recomendationForm.value.recommendationstoPatient = "";
  };

  const clearData = () => {
    recomendationList.value = [];
  };

  return {
    patientRecommendationText,
    recommendationstoPatient,
    addRecomendation,
    setPatientRecommendationText,
    setRecommendationstoPatient,
    recomendationList,
    isValid,
    clearData,
  };
});
