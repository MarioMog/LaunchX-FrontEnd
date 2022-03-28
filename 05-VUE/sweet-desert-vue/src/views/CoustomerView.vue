<script>
import FormComponent from "../components/FormComponent.vue";

export default {
  name: "HomeView",
  components: { FormComponent },
};
</script>

<template>
  <main>
    <div class="container-card">
      <h2>Como manejamos nuestros precios</h2>
      <p>
        El precio base es de $100 y contiene 1 sabor y una decoración incluida.
      </p>
      <h3>Extras</h3>
      <p>
        Los sabores extra tiene un costo de $75 cada uno y es un piso extra de
        ese sabor.
      </p>
      <p>Las decoraciones extra tiene un costo de $20 cada una.</p>
      <h3>Nota</h3>
      <p>
        En la descripción del pedido deberá colocar que sabor será la cobertura
        o le colocaremos una aleatoria de los sabores que eligió.
      </p>
    </div>
    <FormComponent />
  </main>
</template>
<style>
main label {
  font-size: large;
}
main input[type="text"],
main input[type="tel"],
main input[type="email"] {
  width: 100%;
  padding: 5px 0;
  margin: 8px 0;
}
main button.submit {
  background-color: limegreen;
  border: none;
  border-radius: 10px;
  color: white;
  margin-top: 2em;
  padding: 15px 32px;
  font-size: 16px;
  float: right;
}
main button.submit:hover {
  cursor: pointer;
  background-color: rgb(29, 122, 29);
}
.container-card {
  width: 50%;
  display: block;
  float: left;
  padding: 1em;
}
</style>
