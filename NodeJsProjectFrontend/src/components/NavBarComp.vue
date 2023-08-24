<template>
    <nav>
        <div class="store-logo-div">
            <img src="https://i.postimg.cc/0yLj1xJ9/pngegg.png" alt="home">
            <router-link class="store-logo" to='/' >BDPCC™</router-link>
        </div>
        <div class="router-link-div">
        <router-link class="router-link" to="/src/views/ProductsView.vue">Products</router-link>
        <router-link class="router-link" to='/src/views/AboutView.vue'>About</router-link>
        <router-link class="router-link" to="/src/views/ContactView.vue">Contact</router-link>
        <router-link class="router-link" to='/src/views/LogInView.vue'>Log In</router-link>
        <router-link class="router-link" to='/src/views/AdminView.vue'>Admin</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBarComp'
}
</script>


<style scoped>
*{
    font-size: 20px;
}
nav {
    background-color: rgb(55, 55, 55);
    display: flex;
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.router-link{
    color: white;
    text-decoration: none;
    padding: 0px 15px 0px 0px;
}
.router-link-div{
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
}
.store-logo{
    align-content: center;
    color: white;
    text-decoration: none;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0 0 0 5px;
}
.store-logo-div{
    display: flex;
}
.store-logo-div img{
    height: 30px;
    margin: auto 0 auto 15px;
}
.store-logo:active, .router-link:active, .store-logo:hover, .router-link:hover{
    color: orangered;
    text-decoration: underline;
}
</style>