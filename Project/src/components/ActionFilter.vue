<script setup lang="ts">
    const emit = defineEmits<{
        (e: 'sortPrice'): void;
        (e: 'sortName'): void;
        (e: 'filterStock', inStock: boolean | null): void;
    }>()

    function emitFilterStock(e: Event) {
        const value = (e.target as HTMLSelectElement).value;
        let inStock: boolean | null = null;
        if(value) {
            inStock = value === 'true';
        }
        emit('filterStock', inStock);
    }
</script>
<template>
  <div class="actions">
    <button @click="emit('sortPrice')">價格排序</button>
    <button @click="emit('sortName')">名稱排序</button>
    <select @change="emitFilterStock">
      <option value="">庫存</option>
      <option value="true">有貨</option>
      <option value="false">缺貨</option>
    </select>
  </div>
</template>
<style scoped>
.actions {
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}
</style>
