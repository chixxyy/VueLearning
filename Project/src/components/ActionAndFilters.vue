<script setup lang="ts">
import { defineEmits, onMounted, ref } from "vue";

const emit = defineEmits<{
  (e: "sortByPrice"): void;
  (e: "sortByName"): void;
  (e: "filterByStock", inStock: boolean | null): void;
}>();

function emitFilterByStock(e: Event) {
  const value = (e.target as HTMLSelectElement).value;
  let inStock: boolean | null = null;
  if (value) {
    inStock = value === "true";
  }
  emit("filterByStock", inStock);
}

const selectRef = ref<HTMLSelectElement | null>(null);

onMounted(() => {
  console.log(selectRef.value?.selectedIndex);
});
</script>
<template>
  <div class="actions">
    <button @click="emit('sortByPrice')">按價格排序</button>
    <button @click="emit('sortByName')">按名稱排序</button>
    <select @change="emitFilterByStock" ref="selectRef">
      <option value="">庫存過濾</option>
      <option value="true">有貨</option>
      <option value="false">缺貨</option>
    </select>
  </div>
</template>
<style scoped>
.actions {
  display: flex;
  gap: 24px;
}
</style>
