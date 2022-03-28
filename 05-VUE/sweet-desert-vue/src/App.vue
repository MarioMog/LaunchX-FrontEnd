<script setup>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <NavbarComponent />
  <div class="container">
    <RouterView />
  </div>
  <FooterComponent />
</template>

<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
body {
  background-color: gainsboro;
}
.container {
  display: flex;
  flex-flow: column;
}
main {
  margin: 2% auto;
  padding: 2%;
  width: 70%;
  background-color: white;
  text-align: left;
}
</style>
