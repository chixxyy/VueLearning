<script setup lang="ts">
import { ref, type Ref ,reactive ,computed } from 'vue'
import ShopIcon from './components/Icon/ShopIcon.vue'
import ProductItem from './components/ProductItem.vue'
import ActionFilter from './components/ActionFilter.vue'

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

type SortDirection = 'asc' | 'desc' | ""

interface SortAndFilter {
  price: SortDirection;
  name: SortDirection;
  inStock: boolean | null;
}

const sortAndFilter: SortAndFilter = reactive({
  price: "",
  name: "",
  inStock: null,
});

const productResult = computed(() => {
    return products.value
    .filter((p) =>
      sortAndFilter.inStock === null
        ? true
        : p.inStock === sortAndFilter.inStock
    )
    .sort((a, b) => {
      if (sortAndFilter.price) {
        return sortAndFilter.price === "asc"
          ? a.price - b.price
          : b.price - a.price;
      }
      if (sortAndFilter.name) {
        return sortAndFilter.name === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
      return 0;
    });
});

function handSortPrice() {
  if(sortAndFilter.price === "asc") {
    sortAndFilter.price = "desc";
  } else {
    sortAndFilter.price = "asc";
  }
  sortAndFilter.name = "";
}

function handSortName() {
  if(sortAndFilter.name === "asc") {
    sortAndFilter.name = "desc";
  } else {
    sortAndFilter.name = "asc";
  }
  sortAndFilter.price = "";
}

function handleFilterStock(inStock: boolean | null) {
  sortAndFilter.inStock = inStock;
}

</script>

<template>
  <main>
    <h1><ShopIcon />加油讚</h1>
    
    <div class="productsList">
      <ActionFilter 
        @sort-by-price="handSortPrice"
        @sort-by-name="handSortName"
        @filter-stock="handleFilterStock"
      >
      </ActionFilter>
      <ProductItem
        v-for="product in productResult"
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
  gap: 30px;
  width: 100vw;
  padding: 20px;
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
  gap: 30px;
  width: 60%;
}
</style>
