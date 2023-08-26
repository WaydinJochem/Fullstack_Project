<template>
  <div class="content-wrap">
    <div class="heading">
      <h1>About Us</h1>
    </div>
    <div class="img-div">
      <img
        src="https://i.postimg.cc/4yHqTvNP/Waydin-Jochem-C12-C1-25-Apr23-ojbfsufu.jpg"
        alt="wayden"
      />
      <img
        src="https://i.postimg.cc/JnZY6rTY/C12-C2-Connor-Winkworth-1by1.jpg"
        alt="connor"
      />
    </div>
    <div class="paragraph">
      <p>
        Big Daddy's PC Company, founded in 2019, is a reputable computer sales
        company dedicated to providing customers with quality PC components at
        affordable prices. With a strong commitment to customer satisfaction,
        Big Daddy's PC Company strives to ensure that customers receive the best
        deals available in the market. Whether it's processors, graphics cards,
        or storage solutions, the company offers a wide range of
        high-performance products to meet the diverse needs of computer
        enthusiasts and professionals alike. With a focus on quality and
        affordability, Big Daddy's PC Company has quickly gained a reputation as
        a trusted source for top-notch PC components.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.content-wrap {
  min-height: 100vh;
  margin-top: 60px;
}
p {
  font-size: 30px;
}
.heading {
  text-align: center;
  margin-top: 10px;
}
.paragraph {
  margin: 10px 10px 10px 10px;
}
img {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 350px;
  width: 350px;
  margin: 10px 10px 10px 10px;
}
.img-div {
  justify-content: center;
  display: flex;
}
</style>
