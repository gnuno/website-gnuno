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
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    component: () => import(/* webpackChunkName: "Proyectos" */ "../views/Home")
  },
  {
    path: "/eventos",
    name: "Eventos",
    component: () => import(/* webpackChunkName: "Eventos" */ "../views/Home")
  },
  {
    path: "/articulos",
    name: "Articulos",
    component: () => import(/* webpackChunkName: "Articulos" */ "../views/Home")
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import(/* webpackChunkName: "Contacto" */ "../views/Home")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
