<template>
  <div class="content-wrap">
    <h1>Admin</h1>
    <div class="add-users-div">
      <router-link to="../views/AddUserView.vue"
        ><button class="add-user-btn">Access Users</button></router-link
      >
    </div>
    <table>
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Catergory</th>
        <th>Image URL</th>
        <th>Action</th>
      </tr>
      <tr v-for="(product, index) in this.products" :key="index">
        <td>{{ product.prodID }}</td>
        <td>{{ product.prodName }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.amount }}</td>
        <td>{{ product.Category }}</td>
        <td>{{ product.prodUrl }}</td>
        <td>
          <router-link
            :to="{
              path: '../views/' + product.prodID + '/EditProductView.vue',
            }"
            ><button class="edit">Edit</button></router-link
          ><button @click="deleteProduct(product.prodID)" class="delete">
            Delete
          </button>
        </td>
      </tr>
    </table>
    <div class="loading-div" v-if="loading">
      <span class="loading" v-if="loading">Loading</span>
      <span v-if="loading"><img src="https://i.postimg.cc/rFXh4btK/loading-loading-forever.gif" alt="loading"></span>
    </div>
    <span v-else></span>
    <div class="add-product-div">
      <button @click="() => ToggleModal('btnTrigger')" class="add-product-btn">
        Add Product
      </button>
      <AddProductsComp
        v-if="modalTrigger.btnTrigger"
        :ToggleModal="() => ToggleModal('btnTrigger')"
      >
        <h3>Add Products Menu</h3>
      </AddProductsComp>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import AddProductsComp from "../components/AddProductsComp.vue";

export default {
  name: "AdminView",
  components: {
    AddProductsComp,
  },
  data() {
    const modalTrigger = ref({
      btnTrigger: false,
    });

    const ToggleModal = (trigger) => {
      modalTrigger.value[trigger] = !modalTrigger.value[trigger];
    };

    return {
      modalTrigger,
      ToggleModal,
      products: [],
      loading: false,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.loading = !false;
      axios.get("https://node-fullstack.onrender.com/products").then((res) => {
        this.products = res.data.results;
        this.loading = !true;
        console.log(this.products);
      });
    },
    deleteProduct(prodID) {
      console.log(prodID);
      axios
        .delete(`https://node-fullstack.onrender.com/products/${prodID}`)
        .then((res) => {
          this.getProducts();
        });
    },
  },
};
</script>

<style scoped>
.content-wrap {
  min-height: 100vh;
  margin-top: 60px;
}
table,
th,
td {
  border: 1px solid black;
}
table {
  width: 99%;
  margin: 10px auto 10px auto;
  background-color: black;
}
th {
  background-color: orangered;
}
td {
  background-color: white;
  width: 15%;
  text-align: center;
}
.delete,
.edit {
  cursor: pointer;
  height: 40px;
  width: 90%;
  margin: 5px 5px 5px 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.edit {
  background-color: deepskyblue;
}
.edit:hover {
  background-color: dodgerblue;
}
.edit:active {
  background-color: rgb(0, 84, 219);
}
.delete {
  background-color: orange;
}
.delete:hover {
  background-color: darkorange;
}
.delete:active {
  background-color: rgb(255, 106, 0);
}
.add-product-btn:hover {
  background-color: rgb(76, 252, 0);
}
.add-product-btn:active {
  background-color: rgb(0, 205, 0);
}
.add-product-div {
  justify-content: center;
  align-content: center;
  margin: auto auto 10px auto;
  width: 100%;
  text-align: center;
}
.add-product-btn,
.add-user-btn {
  cursor: pointer;
  justify-content: center;
  margin: 0 auto 0 auto;
  width: 100px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: rgba(4, 255, 0, 0.936);
  height: 40px;
}
.add-users-div {
  text-align: right;
  margin-top: 10px;
  margin-right: 10px;
}
h1 {
  text-align: center;
  margin-top: 15px;
}
.loading {
  text-align: center;
  justify-content: center;
  font-size: 30px;
}
.loading-div {
  text-align: center;
  margin-bottom: 10px;
  justify-content: center;
  align-content: center;
}
.loading-div img{
  height: 30px;
}
</style>
