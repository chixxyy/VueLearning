const app = Vue.createApp({
  data() {
    return {
      showAnswer: false,
    };
  },
  computed: {
    label() {
      return this.showAnswer ? "隱藏答案" : "顯示答案";
    },
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
  },
});
app.mount("#app");
