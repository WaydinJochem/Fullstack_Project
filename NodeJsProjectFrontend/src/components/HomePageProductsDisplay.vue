<template>
  <div class="big-div">
    <div class="product-div">
      <h3>Motherboards</h3>
      <img
        src="https://i.postimg.cc/HxntsbQ9/cropped-1920-1080-756295.jpg"
        alt="motherboard"
      />
    </div>
    <div class="product-div">
      <h3>Graphics Cards</h3>
      <img
        src="https://i.postimg.cc/sgvP4HC5/Nvidia-RTX-4090.png"
        alt="nvidia gpu"
      />
    </div>
    <div class="product-div">
      <h3>Processors</h3>
      <img
        src="https://i.postimg.cc/W4VC5Y0Y/AMD-Ryzen-Desktop-CPUs.jpg"
        alt="amd cpu"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageProductsDisplay",
};
</script>

<style scoped>
.big-div {
  background: transparent;
  display: flex;
  justify-content: space-evenly;
  margin: auto auto auto auto;
}
.product-div {
  justify-content: center;
  align-content: center;
  text-align: center;
}
img {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  width: 480px;
  height: 270px;
  position: center center;
}
h3 {
  color: black;
}
</style>
