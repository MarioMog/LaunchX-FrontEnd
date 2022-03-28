import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      currentId: -1,
      pedidos: [],
      flavors: [
        {
          id: 1,
          name: "Chocolate",
          price: "5",
          unit: "Kg",
        },
        {
          id: 2,
          name: "Café",
          price: "20",
          unit: "Kg",
        },
        {
          id: 3,
          name: "Vainilla",
          price: "40",
          unit: "Kg",
        },
        {
          id: 4,
          name: "Red Valvet",
          price: "30",
          unit: "Kg",
        },
      ],
      adornosChef: [
        {
          id: 1,
          name: "Chispas de colores",
          price: "5",
          unit: "Kg",
        },
        {
          id: 2,
          name: "Mensaje",
          price: "NA",
          unit: "",
        },
        {
          id: 3,
          name: "Nuez",
          price: "10",
          unit: "Kg",
        },
        {
          id: 4,
          name: "Caramelo",
          price: "10",
          unit: "L",
        },
      ],
    };
  },
  getters: {},
  mutations: {
    setPedidos: (state, pedidos) => {
      state.pedidos.push(pedidos);
    },
    incremmentId: (state) => {
      state.currentId++;
    },
  },
  actions: {},
  modules: {},
});

export default store;
