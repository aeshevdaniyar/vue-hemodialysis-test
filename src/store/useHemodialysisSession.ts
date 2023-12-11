import { computed, ref } from "vue";
import { SessionData } from "./useCreateSession";
import { TreatmentHomeData } from "./useTreatmentHome";
import { PostSessionsData } from "./usePostSessionAppointments";
import { RecomendationForm } from "./useRecomendation";
export interface HemodialysisSession {
  data: {
    sessionData: SessionData[];
    postSesionData: PostSessionsData[];
    treatmentHome: TreatmentHomeData[];
    recomendations: RecomendationForm[];
  };
}

export const useHemodialysisSession = () => {
  const hemodialysisSession = ref<HemodialysisSession[]>([]);
  const hemodialysisSessionList = computed(() => hemodialysisSession.value);
  const saveHemodialysisSession = (data: HemodialysisSession) => {
    hemodialysisSession.value.push(data);
  };

  return {
    hemodialysisSessionList,
    saveHemodialysisSession,
  };
};
