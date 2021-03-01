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
      import(/* webpackChunkName: "SoftwareLibre" */ "../views/SoftwareLibre")
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: () =>
      import(/* webpackChunkName: "Nosotros" */ "../views/Nosotros")
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import(/* webpackChunkName: "Chat" */ "../views/Chat")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
