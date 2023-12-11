import { defineStore } from "pinia";
import { computed, ref } from "vue";
export interface SelectItem {
  value: number;
  name: string;
}
export interface CreateSessionData {
  deviceProgram: string;
  dialyzer: SelectItem | null;
  concentrator: SelectItem | null;
  concentratorVolume: number;
  injectionType: string;
  needle: SelectItem | null;
  needleType: SelectItem | null;
  catheter: SelectItem | null;
  catheterType: SelectItem | null;
  bicarbonateValue: number;
  bicarbonateUnit: SelectItem | null;
  patientDryWeight: number;
  anticoagulation: SelectItem | null;
  volume: number;
}

export interface SessionData {
  deviceProgram: string;
  dialyzer: string;
  concentrator: string;
  concentratorVolume: number;
  injectionType: string;
  needle: string;
  needleType: string;
  catheter: string;
  catheterType: string;
  bicarbonateValue: number;
  bicarbonateUnit: string;
  patientDryWeight: number;
  anticoagulation: string;
  volume: number;
}
export const useCreateSession = defineStore("createSession", () => {
  const forms = ref<CreateSessionData>({
    deviceProgram: "HDF",
    dialyzer: null,
    concentrator: null,
    concentratorVolume: 10,
    injectionType: "needle",
    needle: null,
    needleType: null,
    catheter: null,
    catheterType: null,
    bicarbonateValue: 0,
    bicarbonateUnit: null,
    patientDryWeight: 0,
    anticoagulation: null,
    volume: 0,
  });

  const sessionDataList = ref<SessionData[]>([]);

  const hemodialysisSession = ref<CreateSessionData[]>([]);
  const isValid = computed(() => {
    if (injectionType.value == "needle") {
      return (
        forms.value.deviceProgram &&
        forms.value.dialyzer != null &&
        forms.value.concentrator != null &&
        forms.value.concentratorVolume > 0 &&
        forms.value.injectionType &&
        forms.value.needle != null &&
        forms.value.needleType != null &&
        forms.value.bicarbonateValue > 0 &&
        forms.value.bicarbonateUnit != null &&
        forms.value.patientDryWeight > 0 &&
        forms.value.anticoagulation != null &&
        forms.value.volume > 0
      );
    }

    return (
      forms.value.deviceProgram &&
      forms.value.dialyzer != null &&
      forms.value.concentrator != null &&
      forms.value.concentratorVolume > 0 &&
      forms.value.injectionType &&
      forms.value.catheter != null &&
      forms.value.catheterType != null &&
      forms.value.bicarbonateValue > 0 &&
      forms.value.bicarbonateUnit != null &&
      forms.value.patientDryWeight > 0 &&
      forms.value.anticoagulation != null &&
      forms.value.volume > 0
    );
  });
  const formData = computed(() => forms.value);
  const deviceProgram = computed(() => forms.value.deviceProgram);
  const dialyzer = computed(() => forms.value.dialyzer);
  const concentrator = computed(() => forms.value.concentrator);
  const concentratorVolume = computed(() => forms.value.concentratorVolume);
  const injectionType = computed(() => forms.value.injectionType);
  const needle = computed(() => forms.value.needle);
  const needleType = computed(() => forms.value.needleType);
  const catheter = computed(() => forms.value.catheter);
  const catheterType = computed(() => forms.value.catheterType);
  const bicarbonateValue = computed(() => forms.value.bicarbonateValue);
  const bicarbonateUnit = computed(() => forms.value.bicarbonateUnit);
  const patientDryWeight = computed(() => forms.value.patientDryWeight);
  const anticoagulation = computed(() => forms.value.anticoagulation);
  const volume = computed(() => forms.value.volume);
  const allSessionDataList = computed(() => sessionDataList.value);

  const addSessionData = () => {
    const newSessionData: SessionData = {
      anticoagulation: forms.value.anticoagulation?.name || "",
      bicarbonateUnit: forms.value.bicarbonateUnit?.name || "",
      bicarbonateValue: forms.value.bicarbonateValue,
      catheter: forms.value.catheter?.name || "",
      catheterType: forms.value.catheterType?.name || "",
      concentrator: forms.value.concentrator?.name || "",
      concentratorVolume: forms.value.concentratorVolume,
      deviceProgram: forms.value.deviceProgram,
      dialyzer: forms.value.dialyzer?.name || "",
      injectionType: forms.value.injectionType,
      needle: forms.value.needle?.name || "",
      needleType: forms.value.needleType?.name || "",
      patientDryWeight: forms.value.patientDryWeight,
      volume: forms.value.volume,
    };
    sessionDataList.value.push(newSessionData);

    forms.value = {
      deviceProgram: "HDF",
      dialyzer: null,
      concentrator: null,
      concentratorVolume: 10,
      injectionType: "needle",
      needle: null,
      needleType: null,
      catheter: null,
      catheterType: null,
      bicarbonateValue: 0,
      bicarbonateUnit: null,
      patientDryWeight: 0,
      anticoagulation: null,
      volume: 0,
    };
  };

  const setFormData = (data: CreateSessionData) => {
    forms.value = data;
  };

  const setDeviceProgram = (data: string) => {
    forms.value.deviceProgram = data;
  };

  const setDialyzer = (data: SelectItem) => {
    forms.value.dialyzer = data;
  };

  const setConcentrator = (data: SelectItem) => {
    forms.value.concentrator = data;
  };

  const setConcentratorVolume = (data: number) => {
    forms.value.concentratorVolume = data;
  };

  const setInjectionType = (data: string) => {
    forms.value.injectionType = data;
  };

  const setNeedle = (data: SelectItem) => {
    forms.value.needle = data;
  };

  const setNeedleType = (data: SelectItem) => {
    forms.value.needleType = data;
  };

  const setCatheter = (data: SelectItem) => {
    forms.value.catheter = data;
  };
  const setCatheterType = (data: SelectItem) => {
    forms.value.catheterType = data;
  };

  const setBicarbonateValue = (data: number) => {
    forms.value.bicarbonateValue = data;
  };
  const setBicarbonateUnit = (data: SelectItem) => {
    forms.value.bicarbonateUnit = data;
  };

  const setPatientDryWeight = (data: number) => {
    forms.value.patientDryWeight = data;
  };

  const setAnticoagulation = (data: SelectItem) => {
    forms.value.anticoagulation = data;
  };

  const setVolume = (data: number) => {
    forms.value.volume = data;
  };

  const createHemodialysisSession = (data: CreateSessionData) => {
    hemodialysisSession.value.push(data);
  };

  const clearData = () => {
    sessionDataList.value = [];
  };

  return {
    formData,
    setFormData,
    setDeviceProgram,
    setInjectionType,
    setAnticoagulation,
    setDialyzer,
    setCatheter,
    setNeedle,
    setConcentrator,
    setConcentratorVolume,
    setCatheterType,
    setNeedleType,
    setVolume,
    createHemodialysisSession,
    setBicarbonateValue,
    setPatientDryWeight,
    setBicarbonateUnit,
    clearData,
    hemodialysisSession,
    deviceProgram,
    dialyzer,
    concentrator,
    concentratorVolume,
    injectionType,
    needle,
    needleType,
    catheter,
    catheterType,
    bicarbonateValue,
    bicarbonateUnit,
    patientDryWeight,
    anticoagulation,
    volume,
    isValid,
    allSessionDataList,
    addSessionData,
  };
});
