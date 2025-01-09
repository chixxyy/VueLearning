<script setup lang="ts">
interface Props {
    id: number;
    title: string;
    price: number;
    inStock: boolean;
    imageUrl: string;
}

defineProps<Props>();
</script>
<template>
    <div class="product">
        <img :src="imageUrl" :alt="title" />
        <h2>{{ title }}</h2>
        <p class="price">售價：{{ price }}元</p>
        <p>庫存：{{ inStock ? '有貨' : '缺貨' }}</p>
    </div>
</template>

<style>
.product {
  box-shadow: 0px 0px 24px hsl(0deg, 0%, 0%, 0.1);
  padding: 18px;
  border-radius: 12px;
}

.product img {
  height: 200px;
}

.price {
  color: hsl(0deg, 100%, 66%);
  font-weight: bold;
}
</style>