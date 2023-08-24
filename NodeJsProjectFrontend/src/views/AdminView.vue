<template>
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
            <td>{{product.prodID}}</td>
            <td>{{product.prodName}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.amount}}</td>
            <td>{{product.Category}}</td>
            <td>{{product.prodUrl}}</td>
            <td><button class="edit">Edit</button><button class="delete">Delete</button></td>
        </tr>
    </table>
    <div class="add-product-div">
        <button @click="() => ToggleModal('btnTrigger')" class="add-product-btn">Add Product</button>
        <AddProductsComp v-if="modalTrigger.btnTrigger" :ToggleModal="() => ToggleModal('btnTrigger')">
            <h3>Add Products Menu</h3>
        </AddProductsComp>
    </div>
</template>

<script>
import AddProductsCompVue from "@/components/AddProductsComp.vue"
import { onMounted } from "vue"
import axios from 'axios'
import {ref} from 'vue'
import AddProductsComp from '../components/AddProductsComp.vue'

export default {
    name: 'AdminView',
    components: {
        AddProductsComp
    },
    data(){
        const modalTrigger = ref({
        btnTrigger: false
        });

        const ToggleModal = (trigger) => {
            modalTrigger.value[trigger] = !modalTrigger.value[trigger]
        };
        
        return {
            modalTrigger,
            ToggleModal,
            products: []
        }
    },
    mounted(){
        this.getProducts();
    },
    methods: {
        getProducts(){
            axios.get('https://node-fullstack.onrender.com/products').then(res => {
                this.products = res.data.results
                console.log(this.products)
            })
        },
    }
    }
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
}
table{
    width: 99%;
    margin: 10px auto 10px auto;
    background-color: black;
}
th{
    background-color: orangered;
}
td{
    background-color: white;
    width: 15%;
    text-align: center;
}
.delete, .edit{
    cursor: pointer;
    height: 40px;
    width: 90%;
    margin: 5px 5px 5px 5px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.edit{
    background-color: deepskyblue;
}
.edit:hover{
    background-color: dodgerblue;
}
.edit:active{
    background-color: rgb(0, 84, 219);
}
.delete{
    background-color: orange;
}
.delete:hover{
    background-color: darkorange;
}
.delete:active{
    background-color: rgb(255, 106, 0);
}
.add-product-btn:hover{
    background-color: rgb(76, 252, 0);
}
.add-product-btn:active{
    background-color: rgb(0, 205, 0);
}
.add-product-div{
    justify-content: center;
    align-content: center;
    margin: auto auto 10px auto;
    width: 100%;
    text-align: center;
}
.add-product-btn{
    cursor: pointer;
    justify-content: center;
    margin: 0 auto 0 auto;
    width: 100px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    background-color: rgba(4, 255, 0, 0.936);
    height: 40px;
}
</style>