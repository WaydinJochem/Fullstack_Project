<template>
  <NavBarComp />
  <router-view />
  <FooterComp />
</template>

<script>
import NavBarComp from "./components/NavBarComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  components: {
    NavBarComp,
    FooterComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Share+Tech&display=swap");

html {
  background-image: url(https://i.postimg.cc/vHy6VBXF/1e92c955f5c201bfeef900517617c163.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Share Tech", sans-serif;
}
*::-webkit-scrollbar {
  display: none;
}
</style>
