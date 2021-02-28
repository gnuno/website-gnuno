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
            "Inicio",
            "Software Libre",
            "¿Que es GNUno?",
            "Artículos",
            "Proyectos",
            "Eventos",
            "Chat",
            "Contacto"
          ]
        },
        {
          titulo: "Links",
          links: [
            "Universidad Nacional del Oeste",
            "ForoUNO",
            "Proyecto GNU",
            "Free Software Foundation"
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
