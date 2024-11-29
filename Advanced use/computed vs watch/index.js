const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0 教學",
        "Vue 3 指南",
        "React 18 介紹",
        "JavaScript 基礎",
      ],
      newBlog: "",
    };
  },
  computed: {
    count() {
      return this.blogPosts.length;
    }, 
  },
  watch: {
    blogPosts: {
      handler(newVal) {
        this.count = newVal.length;
      },
      deep: true,
    },
    newBlog(newVal) {
      setTimeout(() => {
        this.blogPosts.push(newVal);
      },2000)
    }
  }
});
app.mount("#app");
