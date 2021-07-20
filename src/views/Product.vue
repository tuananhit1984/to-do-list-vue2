<template>
  <div class="home">
      Product:
  <div>:
    <product-list :dataProductView="dataProductView"/>
  </div>  
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Product',
  components: {
    ProductList,
  },
  data() {
    return {
      taskName: '',
      dataProductView: [],
      dataCardView: [],
    }
  },
  methods: {
    
  },
  async mounted() {
      // call action
      await this.$store.dispatch('getProductList');
      // console.log(this.$store.state.productList);
      this.dataProductView = this.$store.state.productList;
  }
}
</script>
