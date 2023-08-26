<template>
  <div class="content-wrap">
    <h1>Products Page</h1>
    <div class="page">
      <div class="big-div">
        <div>
          <select v-model="selectedOption">
            <option value="1">Sort by Name Asc</option>
            <option value="2">Sort by Name Desc</option>
            <option value="3">Sort by Price</option>
          </select>
        </div>
        <div class="products-div" v-if="products">
          <div class="product" v-for="product of products" :key="product">
            <div class="image-div">
              <img :src="product.prodUrl" :alt="product.prodName" />
              <div class="image-div-body">
                <h5 class="image-title">
                  {{ product.prodName }}
                  <br />
                  R{{ product.amount }}
                </h5>
                <p class="image-category-text">
                  <span>Category: {{ product.Category }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsView",

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  data() {
    return {
      selectedOption: ''
    }
  },
  watch: {
    selectedOption(newValue) {
      if (newValue === '1') {
        this.sortByName();
      }
      else if (newValue === '2') {
        this.sortByNameDesc();
      }
      else if (newValue === '3') {
        this.sortByPrice();
      }
      
    }
  },
  methods: {
    sortByName() {
      this.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
    },
    sortByNameDesc() {
      this.products.sort((a, b) => b.prodName.localeCompare(a.prodName));
    },
    sortByPrice() {
      this.products.sort((a, b) => a.amount - b.amount);
    },
  }

};
</script>

<style scoped>
.content-wrap {
  min-height: 100vh;
  margin-top: 60px;
}

.products-div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 15px 15px 15px 15px;
  justify-content: center;
  text-align: center;
}

.image-div img {
  height: 200px;
  width: 200px;
}

.product {
  padding: 10px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  margin-bottom: 40px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  text-align: center;
  margin-top: 15px;
}</style>
