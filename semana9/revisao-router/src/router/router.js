import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

export const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      component: HomeView,
      name: "home",
    },
    {
      path: "/sobre/:id",
      component: AboutView,
      name: "sobre",
    },
  ],
});
