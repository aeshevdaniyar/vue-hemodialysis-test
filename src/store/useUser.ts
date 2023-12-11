import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useUser = defineStore("user", () => {
  const user = ref({
    fullName: "Аешев Данияр",
    position: "Front-end developer",
  });

  const userData = computed(() => user.value);

  return {
    userData,
  };
});
