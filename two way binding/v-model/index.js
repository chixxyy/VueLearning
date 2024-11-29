const app = Vue.createApp({
  data() {
    return {
      username: "",
    };
  },
  methods: {
    resetUsername() {
      this.username = "";
    },
  },
});
app.mount("#app");
