<template>
  <div class="hello">
    <ul idd="example-2">

      <li v-for="product in dataProductView" :key="product.id">
        {{ product.id }}. {{ product.name }}
        <button @click="buy(product.id)">Buy</button>
        <!-- <router-link :to="'/edit/' + product.id">Edit</router-link> -->
        <!-- <button @click="deleteTaskFromChild(product.id)">delete</button> -->
      </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: { 
    dataProductView: [],
  },
  methods: {
    buy(id) {
      // debugger
      let dataProduct = this.dataProductView.filter(x => x.id == id)[0];
      console.log(dataProduct);
      this.$store.dispatch('addCart', dataProduct)
      
    },
  }
}
</script>

