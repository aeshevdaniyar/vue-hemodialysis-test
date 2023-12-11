import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { SelectItem } from "./useCreateSession";
import dayjs, { Dayjs } from "dayjs";
export interface TreatmentHomeForm {
  medications: SelectItem | null;
  pathOfReception: SelectItem | null;
  drugsValue: number;
  drugsUnit: SelectItem | null;
  receptionFrequency: SelectItem | null;
  dateReception: Dayjs[] | null;
}
export interface TreatmentHomeData {
  key: number;
  medicationName: string;
  pathOfReception: string;
  drugs: string;
  startReception: string;
  endReception: string;
  receptionFrequency: string;
  days: number;
}
export const useTreatmentHome = defineStore("treatmentHome", () => {
  const form = ref<TreatmentHomeForm>({
    medications: null,
    drugsUnit: null,
    drugsValue: 0,
    pathOfReception: null,
    receptionFrequency: null,
    dateReception: null,
  });
  const treatmentHomeData = ref<TreatmentHomeData[]>([]);

  const medications = computed(() => form.value.medications);
  const drugsUnit = computed(() => form.value.drugsUnit);
  const drugsValue = computed(() => form.value.drugsValue);
  const pathOfReception = computed(() => form.value.pathOfReception);
  const receptionFrequency = computed(() => form.value.receptionFrequency);
  const dateReception = computed(() => form.value.dateReception);

  const treatmentColumn = computed(() => [
    {
      title: "Лекарственный препарат",
      dataIndex: "medicationName",
      key: "medicationName",
      responsive: ["sm"],
    },
    {
      title: "Путь приема",
      dataIndex: "pathOfReception",
      key: "pathOfReception",
      responsive: ["sm"],
    },
    {
      title: "Дозировка",
      dataIndex: "drugs",
      key: "drugs",
      responsive: ["sm"],
    },
    {
      title: "Кратность приема",
      key: "receptionFrequency",
      dataIndex: "receptionFrequency",
      responsive: ["sm"],
    },
    {
      title: "Начало приёма",
      key: "startReception",
      dataIndex: "startReception",
      responsive: ["sm"],
    },
    {
      title: "Конец приема",
      key: "endReception",
      dataIndex: "endReception",
      responsive: ["sm"],
    },

    {
      title: "Дней",
      key: "days",
      dataIndex: "days",
      responsive: ["sm"],
    },
    {
      key: "actions",
      dataIndex: "actions",
    },
  ]);

  const allTreatmentHomeData = computed(() => treatmentHomeData.value);

  const isValid = computed(
    () =>
      form.value.dateReception != null &&
      form.value.drugsValue > 0 &&
      form.value.drugsUnit != null &&
      form.value.receptionFrequency != null &&
      form.value.medications != null &&
      form.value.pathOfReception != null
  );
  const addTreatmentHomeData = () => {
    const nextKey = treatmentHomeData.value[treatmentHomeData.value.length - 1]
      ?.key
      ? treatmentHomeData.value[treatmentHomeData.value.length - 1]?.key + 1
      : 1;

    const data: TreatmentHomeData = {
      drugs: `${form.value.drugsValue} ${form.value.drugsUnit?.name}`,
      startReception: form.value.dateReception?.length
        ? dayjs(form.value?.dateReception[0]).format("DD.MM.YYYY")
        : "",
      endReception: form.value.dateReception?.length
        ? dayjs(form.value?.dateReception[1]).format("DD.MM.YYYY")
        : "",
      key: nextKey,
      medicationName: form.value.medications?.name || "",
      pathOfReception: form.value.pathOfReception?.name || "",
      days:
        dayjs(
          form.value?.dateReception?.length ? form.value?.dateReception[1] : ""
        ).diff(
          dayjs(
            form.value?.dateReception?.length
              ? form.value?.dateReception[0]
              : ""
          ),
          "days"
        ) + 1,
      receptionFrequency: form.value.receptionFrequency?.name || "",
    };

    treatmentHomeData.value.push(data);
    form.value = {
      dateReception: null,
      drugsUnit: null,
      drugsValue: 0,
      medications: null,
      pathOfReception: null,
      receptionFrequency: null,
    };
  };

  const deleteTreatmentHomeData = (key: number) => {
    treatmentHomeData.value = treatmentHomeData.value.filter(
      (data) => data.key != key
    );
  };

  const setMedications = (data: SelectItem) => {
    form.value.medications = data;
  };

  const setDrugsUnit = (data: SelectItem) => {
    form.value.drugsUnit = data;
  };

  const setDrugsValue = (data: number) => {
    form.value.drugsValue = data;
  };

  const setPathOfReception = (data: SelectItem) => {
    form.value.pathOfReception = data;
  };

  const setReceptionFrequency = (data: SelectItem) => {
    form.value.receptionFrequency = data;
  };

  const setDateReception = (data: Dayjs[]) => {
    form.value.dateReception = data;
  };

  const clearData = () => {
    treatmentHomeData.value = [];
  };

  return {
    medications,
    drugsUnit,
    drugsValue,
    pathOfReception,
    setDrugsUnit,
    setDrugsValue,
    setPathOfReception,
    setMedications,
    setReceptionFrequency,
    setDateReception,
    dateReception,
    receptionFrequency,
    isValid,
    treatmentColumn,
    addTreatmentHomeData,
    deleteTreatmentHomeData,
    allTreatmentHomeData,
    clearData
  };
});
