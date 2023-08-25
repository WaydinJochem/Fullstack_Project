<template>
  <h1>Edit Products Menu</h1>
  <div class="add-products-div">
    <div class="add-products-inner">
      <slot />
      <div class="input-details-div">
        <div class="input-details-row">
          <label for="">Product ID</label>
          <input
            type="text"
            class="info-input"
            v-model="model.product.prodID"
          />
        </div>
        <div class="input-details-row">
          <label for="">Product Name</label>
          <input
            type="text"
            class="info-input"
            v-model="model.product.prodName"
          />
        </div>
        <div class="input-details-row">
          <label for="">Quantity</label>
          <input
            type="text"
            class="info-input"
            v-model="model.product.quantity"
          />
        </div>
        <div class="input-details-row">
          <label for="">Price</label>
          <input
            type="text"
            class="info-input"
            v-model="model.product.amount"
          />
        </div>
        <div class="input-details-row">
          <label for="">Category</label>
          <input
            type="text"
            class="info-input"
            v-model="model.product.Category"
          />
        </div>
        <div class="input-details-row">
          <label for="">Image URL</label>
          <input
            type="text"
            class="info-input"
            v-model="model.product.prodUrl"
          />
        </div>
      </div>
      <button class="close-btn">Close</button>
      <button @click="UpdateProduct()" class="add-product-btn">Add Product</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    prodID: '',
  name: "EditProducts",
  data() {
    return {
      model: {
        product: {
          prodID: "",
          prodName: "",
          quantity: "",
          amount: "",
          Category: "",
          prodUrl: "",
        },
      },
    };
  },
  mounted() {
    this.getProductData(this.$route.params.id);
    this.prodID = this.$route.params.id;
  },

  methods: {
    getProductData(prodID) {
      axios
        .get(`https://node-fullstack.onrender.com/products/${prodID}`)
        .then(res => {
          console.log(res.data.results);

          this.model.product = res.data.results
          
        });
    },

    UpdateProduct() {
      axios
        .put(
          `https://node-fullstack.onrender.com/products/${this.prodID}`,
          this.model.product
        )
        .then((res) => {
          console.log(res.data);
          alert("You have updated a product");

          
        });
    },
  },
};
</script>

<style scoped>
.add-products-div {
  position: relative;
  margin-top: 6.5%;
  margin-bottom: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.add-products-inner {
  width: 50%;
  height: 52.5%;
  background: white;
  text-align: center center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding-top: 10px;
}
.input-details-row {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.input-details-div {
  display: flex;
  flex-direction: column;
}
.close-btn {
  cursor: pointer;
  justify-content: center;
  margin: 0 0 0 0;
  width: 100px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: orange;
  height: 30px;
  margin-right: 10px;
}
.close-btn:hover {
  background-color: darkorange;
}
.close-btn:active {
  background-color: rgb(255, 106, 0);
}
.add-product-btn {
  cursor: pointer;
  justify-content: center;
  margin: 0 0 10px 0;
  width: 100px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: rgba(4, 255, 0, 0.936);
  height: 30px;
  margin-right: 10px;
}
.add-product-btn:hover {
  background-color: rgb(76, 252, 0);
}
.add-product-btn:active {
  background-color: rgb(0, 205, 0);
}
h1 {
  text-align: center;
  padding-top: 15px;
}
</style>
