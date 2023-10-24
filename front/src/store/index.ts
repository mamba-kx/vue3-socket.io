import { defineStore } from "pinia";

export const useStore = defineStore("useStore", {
  state: () => ({
    chatValue: "",
    chatList: [{ msg: "", avator: "" }]
  }),
  actions: {}
});
