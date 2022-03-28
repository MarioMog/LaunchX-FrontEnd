<template>
  <main v-if="getPedidos.length == 0">
    <h1>Pedidos</h1>
    <strong>No se ha registrado ningún pedido</strong>
  </main>
  <main v-else>
    <h1>Pedidos</h1>

    <table class="customers">
      <thead class="thhead">
        <tr>
          <th>Id pedido</th>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Correo Electrónico</th>
          <th>Descripción</th>
          <th>Sabores</th>
          <th>Adornos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in getPedidos" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.telefono }}</td>
          <td>{{ item.correo }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.flavors.join(", ") }}</td>
          <td>{{ item.toppings.join(", ") }}</td>
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
    getPedidos: (state) => state.pedidos,
  }),
};
</script>
<style>
.customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.thhead {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: dimgrey;
  color: white;
}
.customers td,
.customers th {
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
