<template>
  <div class="card">
    <MovieItem :description="movie.description" />
  </div>
</template>
<script>
import { provide, ref, toRef } from "vue";
import MovieItem from "./MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
  setup() {
    const movie = ref({
      title: "一部好戲",
      description: "保安！可以這樣打了又打打了又打嗎？",
    });

    provide("title", toRef(movie.value, "title"));    

    setTimeout(() => {
      movie.value.title = "上等好戲";
    }, 3000);
    
    return { movie };
  },
};
</script>
<style scoped>
.card {
  padding: 12px;
  border: 1px solid hsl(240deg, 100%, 80%);
  border-radius: 4px;
}
</style>
