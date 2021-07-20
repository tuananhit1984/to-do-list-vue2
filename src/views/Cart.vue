<template>
  <div class="home">
    <div>
      <div>Danh sách giỏ hàng</div>
      <ul idd="example-2" v-if="cardStore.length > 0">
        <li v-for="product in cardStore" :key="product.id">
          {{ product.id }}. {{ product.name }}
          <button @click="deleteProductInCart(product.id)"> delete </button>
        </li>
      </ul>
    </div>

    <div>
      <div>Danh sach san pham:</div>
      <product-list :dataProductView="dataProductView" />
    </div>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Cart",
  components: {
    ProductList,
  },
  data() {
    return {
      dataProductView: [],
      cardStore: [],
    };
  },
  mounted() {
    // call getters
    this.dataProductView = this.$store.getters.getProductList;
    // console.og()this.dataProductView;
    this.cardStore = this.$store.getters.getCart;
  },
  methods: {
    addTask() {},
    deleteProductInCart(productId) {
      this.$store.dispatch("deleteCart", productId);
    },
  },
};
</script>
