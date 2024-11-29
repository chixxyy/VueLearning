const app = Vue.createApp({
  data() {
    return {
      showAnswer: false,
      countDown: 5,
      timer: null,
    };
  },
  computed: {
    label() {
      return this.showAnswer ? "隱藏答案" + this.countDown : "顯示答案";
    },
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer;
    },
  },
  watch: {
    showAnswer(newVal , oldVal ) {
      if(newVal) {
        this.countDown = 5;
        if(this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
        this.timer = setInterval(() => {
          this.countDown -=1;
          if(this.countDown === 0) {
            this.showAnswer = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        },1000)
      }
    }
  }
});
app.mount("#app");
