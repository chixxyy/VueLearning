<template>
  <h2>{{ title }}</h2>
</template>
<script>
import { inject } from 'vue';

export default {
  setup() {
    const title = inject("title");

    return { title };
  },
};
</script>
<style scoped>
h2 {
  color: hsl(240deg, 100%, 80%);
}
</style>
