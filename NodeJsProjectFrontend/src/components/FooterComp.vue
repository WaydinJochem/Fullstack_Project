<template>
    <footer>
        <img class="msi-logo" src="https://i.postimg.cc/wxbdjCrY/pngwing-com.png" alt="msi">
        <img class="nvidia-logo" src="https://i.postimg.cc/j5V8LXbT/Nvidia-Geforce-RTX-New-Badge-2022ihqiyiuqehfi.png" alt="nvidia-rtx">
        <img class="amd-logo" src="https://i.postimg.cc/PxNqvXf1/AMD-Ryzen-logo-svg.png" alt="amd">
        <img src="https://i.postimg.cc/GthP5pzm/pngwing-compkgnjsoigjioujgoiugj.png" alt="nzxt" class="nzxt-logo">
        <img src="https://i.postimg.cc/Qd7CsbK2/pngwing-com-2.png" alt="rog" class="rog-logo">
        <img src="https://i.postimg.cc/MZ4jSXrj/Deepcool-logo-black.png" alt="deepcool" class="deepcool-logo">
        <img src="https://i.postimg.cc/KjYD4Y6g/corsair-logo.png" alt="corsair" class="corsair-logo">
        <img src="https://i.postimg.cc/qvD2SqTg/Hyper-X-logo-PNG1.png" alt="kingston-hyperx" class="kingston-logo">
        <p class="copyright">&copy;All Rights Reserved</p>
    </footer>
</template>

<script>
export default {
    name: 'FooterComp'
}
</script>

<style scoped>
footer{
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    color: black;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
.amd-logo{
    margin-top: auto;
    margin-bottom: auto;
    width: 100px;
    height: 56.25px;
}
.nvidia-logo{
    margin-top: auto;
    margin-bottom: auto;
    width: 160px;
    height: 45px;
}
.msi-logo{
    margin-top: auto;
    margin-bottom: auto;
    width: 110px;
    height: 55px;
}
.copyright{
    font-size: 30px;
    justify-content: center;
    text-align: center;
    align-content: center;
    margin: auto 0 auto 0;
}
.nzxt-logo{
    margin-top: auto;
    margin-bottom: auto;
    width: 120px;
    height: 30px;
}
.rog-logo{
    margin-top: auto;
    margin-bottom: auto;
    width: 90px;
    height: 45px;
}
.deepcool-logo{
    margin-top: auto;
    margin-bottom: auto;
    width: 150px;
    height: 45px;
}
.corsair-logo{
    margin-top: auto;
    margin-bottom: auto;
    width: 170px;
    height: 45px;
}
.kingston-logo{
    margin-top: auto;
    margin-bottom: auto;
    width: 80px;
    height: 55px;
}
</style>