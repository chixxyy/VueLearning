<script setup lang="ts">
import { reactive, ref, computed, provide, type InjectionKey, type Ref } from "vue";
import ShopIcon from "./components/Icon/ShopIcon.vue";
import ProductItem from "./components/ProductItem.vue";
import ActionAndFilters from "./components/ActionAndFilters.vue";
import { Theme } from "./components/keys/Theme";

interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  imageUrl: string;
}

const products = ref<Product[]>([
  { id: 1, title: "棉T", price: 66, inStock: true, imageUrl: "/images/t-shirt1.jpg" },
  { id: 2, title: "西裝", price: 128, inStock: true, imageUrl: "/images/jacket1.jpg" },
  { id: 3, title: "牛仔褲", price: 99, inStock: false, imageUrl: "/images/jeans1.jpg" },
  { id: 4, title: "潮T", price: 72, inStock: true, imageUrl: "/images/t-shirt2.jpg" },
]);

const sortAndFilter = reactive({
  price: "" as "asc" | "desc" | "",
  name: "" as "asc" | "desc" | "",
  inStock: null as boolean | null,
});

const productResult = computed(() => {
  return products.value
    .filter(p => sortAndFilter.inStock === null || p.inStock === sortAndFilter.inStock)
    .sort((a, b) => {
      if (sortAndFilter.price) {
        return sortAndFilter.price === "asc" ? a.price - b.price : b.price - a.price;
      }
      if (sortAndFilter.name) {
        return sortAndFilter.name === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      }
      return 0;
    });
});

function toggleSort(property: 'price' | 'name') {
  sortAndFilter[property] = sortAndFilter[property] === "asc" ? "desc" : "asc";
  sortAndFilter[property === 'price' ? 'name' : 'price'] = "";
}

function handleFilterByStock(inStock: boolean | null) {
  sortAndFilter.inStock = inStock;
}

provide(Theme, "dark");

provide("siteTitle", "V x TS 商店");
</script>

<template>
  <main>
    <h1><ShopIcon />V x TS 商店</h1>
    <ActionAndFilters
      @sort-by-price="() => toggleSort('price')"
      @sort-by-name="() => toggleSort('name')"
      @filter-by-stock="handleFilterByStock"
    />
    <div class="productList">
      <ProductItem
        v-for="product in productResult"
        :key="product.id"
        v-bind="product"
        class="product"
      />
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

.productList {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
}
</style>
