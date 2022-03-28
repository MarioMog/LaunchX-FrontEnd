import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CoustomerView from "../views/CoustomerView.vue";
import BakeryOrdersView from "../views/BakeryOrdersView.vue";
import BakeryStorageView from "../views/BakeryStorageView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/coustomer",
    name: "coustomer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CoustomerView,
  },
  {
    path: "/bakeryo",
    name: "bakeryo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BakeryOrdersView,
  },
  {
    path: "/bakerys",
    name: "bakerys",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BakeryStorageView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
