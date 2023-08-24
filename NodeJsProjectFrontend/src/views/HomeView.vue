<template>
  <HeroComp/>
  <div class="products-header">
    <p>Experience <i><b>ULTIMATE GAMING</b></i> with <i><b>NEW</b></i> and <i><b>IMPROVED PC HARDWARE</b></i> from the <i><b>LEADING BRANDS IN THE PC MARKET!</b></i></p>
  </div>
  <HomePageProductsDisplay/>
  <div class="view-all-products-div">
    <router-link class="view-all-products" to="/src/views/ProductsView.vue">View All Products</router-link>
  </div>
</template>

<script>
import HeroComp from '../components/HeroComp.vue'
import HomePageProductsDisplay from '../components/HomePageProductsDisplay.vue'

export default {
  name: 'HomeView',
  components: {
    HeroComp,
    HomePageProductsDisplay
  }
}
</script>

<style scoped>
*{
  color: rgb(0, 0, 0);
}
p{
  font-size: 40px;
  text-align: center;
}
.products-header{
  margin: 25px 10px;
}
.view-all-products{
  text-decoration: none;
  justify-content: center;
}
.view-all-products:active, .view-all-products:hover{
  color: orangered;
  text-decoration: underline;
}
.view-all-products-div{
  justify-content: center;
  align-content: center;
  text-align: center;
}
</style>