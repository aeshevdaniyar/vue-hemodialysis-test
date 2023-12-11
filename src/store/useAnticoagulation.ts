import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAnticoagulation = defineStore("anticoagulation", () => {
  const anticoagulants = ref([
    {
      name: "Апиксабан ",
      value: 1,
    },
    {
      name: "Варфарин ",
      value: 2,
    },
    {
      name: "Гепарин натрия ",
      value: 3,
    },
    {
      name: "Дабигатрана этексилат ",
      value: 4,
    },
    {
      name: "Далтепарин натрия ",
      value: 5,
    },
    {
      name: "Надропарин кальция ",
      value: 6,
    },
    {
      name: "Проурокиназа ",
      value: 7,
    },
    {
      name: "Ривароксабан",
      value: 8,
    },
  ]);

  const anticoagulantList = computed(() => anticoagulants.value);

  const addAnticoagulant = (name: string) => {
    const nextValue = anticoagulants.value[anticoagulants.value.length - 1]
      ?.value
      ? anticoagulants.value[anticoagulants.value.length - 1]?.value + 1
      : 1;

    anticoagulants.value = [
      ...anticoagulants.value,
      {
        name,
        value: nextValue,
      },
    ];
  };

  const removeAnticoagulant = (value: number) => {
    anticoagulants.value = anticoagulants.value.filter(
      (item) => item.value != value
    );
  };

  return { anticoagulantList, addAnticoagulant, removeAnticoagulant };
});
