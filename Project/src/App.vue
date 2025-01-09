<script setup lang="ts">
import { ref, type Ref } from 'vue'
import ShopIcon from './components/Icon/ShopIcon.vue'
import ProductItem from './components/ProductItem.vue'

interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
}

const products = ref<Product[]>([
  {
    id: 1,
    title: "棉T",
    price: 66,
    inStock: true,
    imageUrl: "/images/t-shirt1.jpg",
  },
  {
    id: 2,
    title: "潮T",
    price: 72,
    inStock: true,
    imageUrl: "/images/t-shirt2.jpg",
  },
  {
    id: 3,
    title: "牛仔褲",
    price: 99,
    inStock: false,
    imageUrl: "/images/jeans1.jpg",
  },
  {
    id: 4,
    title: "夾克",
    price: 128,
    inStock: true,
    imageUrl: "/images/jacket1.jpg",
  },
])
</script>

<template>
  <main>
    <h1><ShopIcon />加油讚</h1>
    <div class="productsList">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        v-bind="product"
        class="product"
      >
      </ProductItem>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  place-items: center;
  gap: 48px;
  width: 100vw;
  padding: 24px;
}

h1 {
  display: flex;
  align-items: center;
  gap: 32px;
}

h1 svg {
  width: 64px;
  height: 64px;
}
.productList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  width: 60%;
}
</style>
