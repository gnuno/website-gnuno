<template>
  <div class="barra_lateral">
    <ContenedorLinks
      v-bind:key="navbar"
      v-for="navbar in navbars"
      :titulo="navbar.titulo"
      :links="navbar.links"
    ></ContenedorLinks>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ContenedorLinks from "@/components/ContenedorLinks";

export default defineComponent({
  name: "BarraLateral",
  components: { ContenedorLinks },
  data() {
    return {
      navbars: [
        {
          titulo: "Secciones",
          links: [
            { tipo: "int", nombre: "Inicio", link: "/" },
            { tipo: "int", nombre: "Software Libre", link: "/softwarelibre" },
            { tipo: "int", nombre: "¿Que es GNUno?", link: "/gnuno" },
            { tipo: "int", nombre: "Artículos", link: "/articulos" },
            { tipo: "int", nombre: "Proyectos", link: "/proyectos" },
            { tipo: "int", nombre: "Eventos", link: "/eventos" },
            { tipo: "int", nombre: "Chat", link: "/chat" },
            { tipo: "int", nombre: "Contacto", link: "/contacto" }
          ]
        },
        {
          titulo: "Links",
          links: [
            {
              tipo: "ext",
              nombre: "Universidad Nacional del Oeste",
              link: "http://uno.edu.ar"
            },
            { tipo: "ext", nombre: "ForoUNO", link: "http://forouno.org" },
            {
              tipo: "ext",
              nombre: "Proyecto GNU",
              link: "https://www.gnu.org/gnu/thegnuproject.en.html"
            },
            {
              tipo: "ext",
              nombre: "Free Software Foundation",
              link: "https://www.fsf.org"
            }
          ]
        }
      ]
    };
  }
});
</script>
<style>
.barra_lateral {
  display: block;
  float: left;
  margin-left: 1%;
  width: 15%;
}
</style>
