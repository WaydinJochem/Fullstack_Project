import { createStore } from 'vuex'


export default createStore({
  state: {
    products: null,
    product:null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product
    },
  },
  actions: {
    async fetchProducts(context) {
      try {
        let response = await fetch(`https://node-fullstack.onrender.com/products`);
        let { results } = await response.json();
        context.commit("setProducts", results);
      } catch (error) {
        alert(error.message);
      }
    },
    async fetchProduct(context) {
      try {
        let { products } = await (
          await fetch("https://node-fullstack.onrender.com/products")
        ).json();
        if (products) {
          context.commit("setProducts", products);
        } else {
          alert("Error");
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
  modules: {
  }
})
