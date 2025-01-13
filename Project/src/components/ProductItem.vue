<script setup lang="ts">
import { computed } from "vue";

interface Props {
  title: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
}

const props = defineProps<Props>();

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'TWD'
  }).format(props.price);
});
</script>

<template>
  <div class="product" :class="{ 'out-of-stock': !inStock }">
    <div class="product-image">
      <img :src="imageUrl" :alt="title" />
    </div>
    <div class="product-info">
      <h2>{{ title }}</h2>
      <p class="price">{{ formattedPrice }}</p>
      <p class="stock-status" :class="{ 'out-of-stock': !inStock }">
        庫存：{{ inStock ? "有貨" : "缺貨" }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.product {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  padding: 1.25rem;
  border-radius: 0.75rem;
  transition: transform 0.2s ease-in-out;
}

.product:hover {
  transform: translateY(-4px);
}

.product-image {
  overflow: hidden;
  border-radius: 0.5rem;
}

.product img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product:hover img {
  transform: scale(1.05);
}

.product-info {
  margin-top: 1rem;
}

.price {
  color: hsl(0deg, 100%, 66%);
  font-weight: bold;
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

.stock-status {
  color: hsl(120deg, 50%, 45%);
}

.stock-status.out-of-stock {
  color: hsl(0deg, 100%, 66%);
}

.out-of-stock {
  opacity: 0.8;
}
</style>
