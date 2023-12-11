import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { SelectItem } from "./useCreateSession";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
export interface PostSessionAppointmentsForm {
  medications: SelectItem | null;
  pathOfReception: SelectItem | null;
  drugsValue: number;
  drugsUnit: SelectItem | null;
  sessionNumbers: number[];
  dateReception: Dayjs[] | null;
  availableNumbers: number[];
}

export interface PostSessionsData {
  key: number;
  medicationName: string;
  pathOfReception: string;
  drugs: string;
  startReception: string;
  endReception: string;
  sessionNumber: string;
  days: number;
}

export const usePostSessionAppointments = defineStore(
  "postSessionAppointments",
  () => {
    const form = ref<PostSessionAppointmentsForm>({
      dateReception: null,
      drugsUnit: null,
      drugsValue: 0,
      pathOfReception: null,
      medications: null,
      sessionNumbers: [],

      availableNumbers: [1, 2, 3, 4, 5, 6, 7],
    });

    const postSessionsData = ref<PostSessionsData[]>([]);

    const formData = computed(() => form.value);

    const sessionNumbers = computed(() => form.value.sessionNumbers);
    const availableNumbers = computed(() => form.value.availableNumbers);
    const drugsUnit = computed(() => form.value.drugsUnit);
    const drugsValue = computed(() => form.value.drugsValue);
    const medications = computed(() => form.value.medications);
    const pathOfReception = computed(() => form.value.pathOfReception);
    const dateReception = computed(() => form.value.dateReception);
    const postSessionColumn = computed(() => [
      {
        title: "Лекарственный препарат",
        dataIndex: "medicationName",
        key: "medicationName",
      },
      {
        title: "Путь приема",
        dataIndex: "pathOfReception",
        key: "pathOfReception",
      },
      {
        title: "Дозировка",
        dataIndex: "drugs",
        key: "drugs",
      },
      {
        title: "Начало приёма",
        key: "startReception",
        dataIndex: "startReception",
      },
      {
        title: "Конец приема",
        key: "endReception",
        dataIndex: "endReception",
      },
      {
        title: "Номер сеанса",
        key: "sessionNumber",
        dataIndex: "sessionNumber",
      },
      {
        title: "Дней",
        key: "days",
        dataIndex: "days",
      },
      {
        key: "actions",
        dataIndex: "actions",
      },
    ]);
    const allPostSessionsData = computed(() => postSessionsData.value);
    const isValid = computed(() => {
      return (
        form.value.dateReception != null &&
        form.value.drugsUnit != null &&
        form.value.medications != null &&
        form.value.sessionNumbers.length > 0 &&
        form.value.pathOfReception != null
      );
    });
    const setSessionNumbers = (data: number) => {
      if (form.value.sessionNumbers.includes(data)) {
        return (form.value.sessionNumbers = form.value.sessionNumbers.filter(
          (num) => num != data
        ));
      }

      form.value.sessionNumbers = [...form.value.sessionNumbers, data];
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
    const setMedications = (data: SelectItem) => {
      form.value.medications = data;
    };

    const setDateReception = (data: Dayjs[]) => {
      form.value.dateReception = data;
    };

    const addPostSessionData = () => {
      const nextKey = postSessionsData.value[postSessionsData.value.length - 1]
        ?.key
        ? postSessionsData.value[postSessionsData.value.length - 1]?.key + 1
        : 1;

      const data: PostSessionsData = {
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
        sessionNumber: form.value.sessionNumbers.join(","),
        days:
          dayjs(
            form.value?.dateReception?.length
              ? form.value?.dateReception[1]
              : ""
          ).diff(
            dayjs(
              form.value?.dateReception?.length
                ? form.value?.dateReception[0]
                : ""
            ),
            "days"
          ) + 1,
      };

      postSessionsData.value.push(data);
      form.value = {
        dateReception: null,
        drugsUnit: null,
        drugsValue: 0,
        medications: null,
        sessionNumbers: [],
        pathOfReception: null,
        availableNumbers: [1, 2, 3, 4, 5, 6, 7],
      };
    };

    const deleteSession = (key: number) => {
      postSessionsData.value = postSessionsData.value.filter(
        (data) => data.key != key
      );
    };

    const clearData = () => {
      postSessionsData.value = [];
    };

    return {
      formData,
      sessionNumbers,
      availableNumbers,
      drugsUnit,
      drugsValue,
      medications,
      pathOfReception,
      dateReception,
      setSessionNumbers,
      setDrugsUnit,
      setDrugsValue,
      setMedications,
      setDateReception,
      setPathOfReception,
      postSessionColumn,
      allPostSessionsData,
      addPostSessionData,
      isValid,
      deleteSession,
      clearData,
    };
  }
);
