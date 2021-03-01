import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home")
  },
  {
    path: "/softwarelibre",
    name: "Software Libre",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/SoftwareLibre")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
