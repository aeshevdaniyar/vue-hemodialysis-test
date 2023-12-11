import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { SelectItem } from "./useCreateSession";

export const useMedication = defineStore("medications", () => {
  const medications = ref<SelectItem[]>([
    {
      name: "Лекарственный препарат 1",
      value: 1,
    },
    {
      name: "Лекарственный препарат 2",
      value: 2,
    },
    {
      name: "Лекарственный препарат 3",
      value: 3,
    },
  ]);

  const medicationList = computed(() => medications.value);

  const addMedication = (name: string) => {
    const nextValue = medications.value[medications.value.length - 1]?.value
      ? medications.value[medications.value.length - 1]?.value + 1
      : 1;

    medications.value = [
      ...medications.value,
      {
        value: nextValue,
        name,
      },
    ];
  };

  const removeMedication = (value: number) => {
    medications.value = medications.value.filter((item) => value != item.value);
  };

  return {
    medicationList,
    addMedication,
    removeMedication,
  };
});
