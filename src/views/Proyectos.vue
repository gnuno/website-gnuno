<template>
  <h1>Proyectos</h1>
  <div v-for="proyecto in proyectos" v-bind:key="proyecto" class="nota">
    <h2>{{ proyecto.titulo }}</h2>
    <p>{{ proyecto.cuerpo }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import proyectos from "@/mock/proyectos";

export default defineComponent({
  name: "Home",
  data() {
    return {
      proyectos: proyectos
    };
  }
});
</script>
<style>
.footer-nota {
  text-align: right;
}
</style>
