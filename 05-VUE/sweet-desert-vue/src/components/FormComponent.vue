<template>
  <div class="container-card">
    <form action="#" @submit="handleSubmit" autocomplete="off">
      <h2>Datos personales</h2>
      <div>
        <label
          >Nombre<input
            type="text"
            name="nombre"
            id="nombre"
            v-model="nombre"
            required
        /></label>
        <label
          >Telefono<input
            type="tel"
            name="telefono"
            id="telefono"
            v-model="telefono"
            required
        /></label>
        <label
          >Correo<input
            type="email"
            name="correo"
            id="correo"
            v-model="correo"
            required
        /></label>
      </div>
      <h2>Personalizacion de pastel</h2>

      <label>
        Descrpción<input
          type="text"
          name="descripcion"
          id="descripcion"
          v-model="descripcion"
        />
      </label>
      <div>
        <label>Elija su sabor</label>
        <br />
        <label class="label-checkbox"
          >Chocolate<input
            type="checkbox"
            name="flavors[]"
            value="Chocolate"
            @change="handleChangeFlavors"
        /></label>
        <label class="label-checkbox"
          >Café<input
            type="checkbox"
            name="flavors[]"
            value="Cafe"
            @change="handleChangeFlavors"
        /></label>
        <label class="label-checkbox">
          Vainilla
          <input
            type="checkbox"
            name="flavors[]"
            value="Vainilla"
            @change="handleChangeFlavors"
        /></label>
        <label class="label-checkbox">
          Red velvet<input
            type="checkbox"
            name="flavors[]"
            value="RedVelvet"
            @change="handleChangeFlavors"
        /></label>
      </div>
      <br />
      <div>
        <label>Elija sus adornos</label>
        <br />
        <label class="label-checkbox"
          >Chispas de colores<input
            type="checkbox"
            name="toppings[]"
            id="ChispasC"
            value="ChispasC"
            @change="handleChangeToppings"
        /></label>
        <label class="label-checkbox"
          >Mensaje<input
            type="checkbox"
            name="toppings[]"
            id="Mensaje"
            value="Mensaje"
            @change="handleChangeToppings"
        /></label>
        <label class="label-checkbox"
          >Nuez<input
            type="checkbox"
            name="toppings[]"
            id="Nuez"
            value="Nuez"
            @change="handleChangeToppings"
        /></label>
        <label class="label-checkbox"
          >Caramelo<input
            type="checkbox"
            name="toppings[]"
            id="Caramelo"
            value="Caramelo"
            @change="handleChangeToppings"
        /></label>
        <br />
      </div>
      <button class="submit">Enviar</button>
    </form>
  </div>
</template>

<style scoped>
.label-checkbox {
  margin-right: 5px;
}
</style>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      nombre: "",
      telefono: "",
      correo: "",
      descripcion: "",
      toppings: [],
      flavors: [],
    };
  },
  methods: {
    handleChangeNombre(e) {
      this.nombre = e.target.value;
    },
    handleChangeTelefono(e) {
      this.telefono = e.target.value;
    },
    handleChangeCorreo(e) {
      this.correo = e.target.value;
    },
    handleChangeDescripcion(e) {
      this.descripcion = e.target.value;
    },
    handleChangeToppings(e) {
      const { checked, value } = e.target;
      if (checked) {
        this.toppings.push(value);
      } else {
        this.toppings = this.toppings.filter((adorno) => adorno !== value);
      }
    },
    handleChangeFlavors(e) {
      const { checked, value } = e.target;
      if (checked) {
        this.flavors.push(value);
      } else {
        this.flavors = this.flavors.filter((adorno) => adorno !== value);
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$store.commit("incremmentId");
      const data = {
        id: this.$store.state.currentId,
        nombre: this.nombre,
        telefono: this.telefono,
        correo: this.correo,
        descripcion: this.descripcion,
        flavors: this.flavors,
        toppings: this.toppings,
      };
      // Send state
      if (data.flavors.length == 0) {
        alert("Debe seleccionar por lo menos 1 sabor");
        return;
      }
      if (data.toppings.includes("Mensaje") && data.descripcion == "") {
        alert("Ingrese el mensaje en la descripción");
        return;
      }
      this.$store.commit("setPedidos", data);
      alert("Pedido enviado");

      this.nombre = "";
      this.telefono = "";
      this.correo = "";
      this.descripcion = "";
      this.toppings = [];
      this.flavors = [];
      let flavorsCb = document.getElementsByName("flavors[]");
      let toppingsCb = document.getElementsByName("toppings[]");
      flavorsCb.forEach((flavorCb) => (flavorCb.checked = false));
      toppingsCb.forEach((toppingCb) => (toppingCb.checked = false));
    },
  },
};
</script>
