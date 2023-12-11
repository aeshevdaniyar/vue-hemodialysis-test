import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { SelectItem } from "./useCreateSession";

export const useDialyzer = defineStore("dialyzer", () => {
  const dialyzers = ref<SelectItem[]>([
    {
      name: "Диализатор 1",
      value: 1,
    },
    {
      name: "Диализатор 2 ",
      value: 2,
    },
    {
      name: "Диализатор 3",
      value: 3,
    },
  ]);

  const dialyzerList = computed(() => dialyzers.value);

  const addDialyzer = (name: string) => {
    const nextValue = dialyzers.value[dialyzers.value.length - 1]?.value
      ? dialyzers.value[dialyzers.value.length - 1]?.value + 1
      : 1;
    dialyzers.value = [
      ...dialyzers.value,
      {
        name,
        value: nextValue,
      },
    ];
  };

  const removeDialyzer = (value: number) => {
    dialyzers.value = dialyzers.value.filter((item) => item.value != value);
  };

  return {
    dialyzerList,
    addDialyzer,
    removeDialyzer,
  };
});
