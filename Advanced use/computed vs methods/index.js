const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0 教學",
        "Vue 3 指南",
        "React 18 介紹",
        "JavaScript 基礎",
      ],
      counter: 0,
    };
  },
  computed: {
    vueBlogs() {
      return this.blogPosts.filter((blog) => blog.includes("Vue"));
    },
  },
  methods: {
    getVueBlog(count) {
      return this.blogPosts
      .filter((blog) => blog.includes("Vue"))
      .slice(0, count);
    },
  },
});
app.mount("#app");
