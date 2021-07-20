import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    productList: [],
    cart: [],
  },
  getters: {
    getProductList: function(state) {
      return state.productList;
    },
    getCart: (state) => {
      return state.cart;
    },
  },
  mutations: {
    setProductList(state, payload) {
      console.log("call mutaions");
      state.productList = payload;
    },
    setAddCart(state, payload) {
      state.cart.push(payload);
    },
    setRemoveCart(state, idProduct) {
      const index = state.cart.indexOf(
        state.cart.filter((item) => item.id == idProduct)[0]
      );
      state.cart.splice(index, 1);
    },
  },
  actions: {
    async getProductList(context) {
      const response = await axios.get("http://localhost:3000/products");
      context.commit("setProductList", response.data);
    },
    addCart(context, product) {
      // add product to cart
      context.commit("setAddCart", product);
    },
    deleteCart(context, idProduct) {
      context.commit("setRemoveCart", idProduct);
    },
  },
});
