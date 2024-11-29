const app = Vue.createApp({
  data() {
    return {
      todos: ["待辦事項", "超市購物", "看書學習"],
    };
  },
});
app.mount("#app");
