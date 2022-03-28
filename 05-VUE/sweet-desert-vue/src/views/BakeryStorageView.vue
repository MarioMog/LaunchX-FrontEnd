<template>
  <main>
    <h1>Almacen</h1>
    <h2>Sabores</h2>
    <table class="customers">
      <thead class="thhead">
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Unidades</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getSabores" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.unit }}</td>
        </tr>
      </tbody>
    </table>
    <h2>Adornos</h2>
    <table class="customers">
      <thead class="thhead">
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Unidades</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getAdornos" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.unit }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "GridSabores",
  computed: mapState({
    getAdornos: (state) => state.adornosChef,
    getSabores: (state) => state.flavors,
  }),
};
</script>
