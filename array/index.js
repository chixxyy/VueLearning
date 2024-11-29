const app = Vue.createApp({
    data() {
        return {
            name: ["小明","小王"], // null 用來佔位
        }
    }
});
app.mount("#app");