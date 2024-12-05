<template>
  <div>
    <input type="text" placeholder="搜尋" v-model="searchTerm">
    <h2>{{ options.title }}</h2>
    <p>用戶：{{ options.user.name }},
      online: {{ options.user.active ? "線上" : "離線" }}
    </p>
    <div v-if="loding">loading...</div>
    <ul v-else> 
      <MessageListItem
        v-for="msg in searchedMessage"
        :key="msg.id"
        :id="msg.id"
        :msg="msg.content"
        @remove="removeMessage"
      ></MessageListItem>
    </ul>
    <button @click="messages = []">刪除全部</button>
    <button @click="options.user.name = '小美'">修改姓名</button>
    <button @click="options.user.active = false">隱藏上線</button>
    <button @click="options.title = '修改標題'">修改標題</button>
  </div>
</template>
<script setup>
import { ref, watchEffect, isRef, reactive, computed, onMounted } from "vue";
import MessageListItem from "./MessageListItem.vue";

    const loding = ref( false );
    onMounted(() => {
      loding.value = true;
      setTimeout(() => {
        messages.value = [
        { id: 1, content: "消息提醒1" },
        { id: 2, content: "消息提醒2" },
        { id: 3, content: "消息提醒3" },
        { id: 4, content: "消息提醒4" },
        ];
        loding.value = false;
      }, 2000);
    })
    const messages = ref([]);

    const options = ref({
      title:"消息列表",
      user: {
        name: "小明",
        active: true,
      },
    });

    const searchTerm = ref("");

    const searchedMessage = computed(() => {
      if (searchTerm.value === "") return messages.value;
      return messages.value.filter((msg) => {
        return msg.content.includes(searchTerm.value);
      });
    });

    function removeMessage(id) {
      messages.value = messages.value.filter((msg) => msg.id !== id);
    }
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
  gap: 24px;
}

h2 {
  color: hsl(280deg, 50%, 70%);
}

p {
  margin: 12px 0 24px 0;
}

ul {
  list-style: none;
  display: grid;
  gap: 24px;
}

li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>
