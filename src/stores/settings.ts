import { defineStore } from "pinia";

export const useSettingsStore = defineStore({
  id: "settings",
  state: () => ({
    apikey: "",
    azureregion: "",
    predictionendpoint: "",
    publishiterationname: "",
    iterationid: "",
  }),
  persist: true,
});
