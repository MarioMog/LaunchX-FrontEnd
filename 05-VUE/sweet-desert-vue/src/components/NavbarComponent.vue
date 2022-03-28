<template>
  <header>
    <nav>
      <div class="logo">
        <img src="../assets/img/logo.png" alt="sweet-desert-logo" />
      </div>
      <ul class="navbar">
        <li class="items">
          <RouterLink to="/" class="link"><span>Inicio</span></RouterLink>
        </li>
        <li class="items">
          <RouterLink to="/coustomer" class="link"
            ><span>Cliente</span></RouterLink
          >
        </li>
        <li class="items">
          <RouterLink to="/bakeryo" class="link"
            ><span>Pastelero Pedidos</span></RouterLink
          >
        </li>
        <li class="items">
          <RouterLink to="/bakerys" class="link"
            ><span>Pastelero Almacen</span></RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
header {
  background-color: teal;
  height: 5em;
  width: 100%;
}
.logo {
  width: 5em;
}
.logo img {
  width: 4em;
  margin: 1em;
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}
.navbar {
  display: flex;
}
.items {
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-left: 2em;
  justify-content: center;
  padding-bottom: 2px;
}

.link:hover {
  color: #d2d2d2;
}

.link {
  text-decoration: none;
  color: #f2f2f2;
  font-size: 1.5em;
  width: 100%;
  height: 100%;
}

.link span {
  width: 100%;
  height: 100%;
}
</style>
