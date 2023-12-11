import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBicarbonate = defineStore("bicarbonate", () => {
  const bicarbonates = ref([
    {
      name: "гр",
      value: 1,
    },
    {
      name: "л",
      value: 2,
    },
  ]);

  const bicarbonateList = computed(() => bicarbonates.value);

  const addBicarbonate = (name: string) => {
    const nextValue = bicarbonates.value[bicarbonates.value.length - 1]?.value
      ? bicarbonates.value[bicarbonates.value.length - 1]?.value + 1
      : 1;
    bicarbonates.value = [
      ...bicarbonates.value,
      {
        name,
        value: nextValue,
      },
    ];
  };

  const removeBicarbonate = (value: number) => {
    bicarbonates.value = bicarbonates.value.filter(
      (item) => item.value != value
    );
  };

  return { bicarbonateList, addBicarbonate, removeBicarbonate };
});
