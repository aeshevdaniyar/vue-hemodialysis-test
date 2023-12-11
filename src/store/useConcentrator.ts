import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useConcentrator = defineStore("concentrator", () => {
  const concentrators = ref([
    {
      name: "Концентратор 1",
      value: 1,
    },
    {
      name: "Концентратор 2 ",
      value: 2,
    },
    {
      name: "Концентратор 3",
      value: 3,
    },
  ]);

  const concentratorList = computed(() => concentrators.value);

  const addConcentrator = (name: string) => {
    const nextValue = concentrators.value[concentrators.value.length - 1]?.value
      ? concentrators.value[concentrators.value.length - 1]?.value + 1
      : 1;
      
    concentrators.value = [
      ...concentrators.value,
      {
        name,
        value: nextValue,
      },
    ];
  };

  const removeConcentrator = (value: number) => {
    concentrators.value = concentrators.value.filter(
      (item) => item.value != value
    );
  };

  return {
    concentratorList,
    addConcentrator,
    removeConcentrator,
  };
});
