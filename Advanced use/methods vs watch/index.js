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
  methods: {
    addNewBlog() {
      setTimeout(() => {
        this.blogPosts.push(this.newBlog);
      }, 2000);
    },
    handleButtonClick() {
      this.newBlog = 'Vue 3. 方法和監聽器的區別'
    }
  },
  watch: {
    newBlog(newVal) {
      setTimeout(() => {
        this.blogPosts.push(newVal);
        this.count += 1;
      }, 2000);
    },
  },
});
app.mount("#app");
