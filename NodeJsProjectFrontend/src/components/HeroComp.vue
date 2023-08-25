<template>
    <div class="hero-div">
        <p class="store-logo"><i><b>BIG DADDY'S PC COMPANY™</b></i></p>
        <p class="slogan"><i><b>STRUGGLING TO FIND THE BEST PC DEALS?
            <br>
            DON'T WORRY... DADDY'S GOTCHA!</b></i></p>
    </div>
</template>

<script>
export default {
    name: 'HeroComp'
}
</script>

<style scoped>
.hero-div{
    margin: 60px 0 10px 0;
    width: 100%;
    height: 600px;
    background-image: url(https://i.postimg.cc/fyJg6L2K/daniel-lezuch-I4-Dc-RJ-Evd8-unsplash.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
.store-logo{
    margin: 0 auto auto 15px;
    color: orangered;
    font-size: 100px;
}
.slogan{
    width: 950px;
    text-align: left;
    color: rgb(255, 255, 255);
    font-size: 45px;
    margin: 50vh auto 0 15px;
}
</style>