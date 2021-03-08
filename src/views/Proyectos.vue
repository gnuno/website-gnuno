<template>
  <h1>Proyectos</h1>
  <div v-for="proyecto in proyectos" v-bind:key="proyecto" class="nota">
    <h2>{{ proyecto.titulo }}</h2>
    <p>{{ proyecto.cuerpo }}</p>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import entradas from "@/mock/entradas";

export default defineComponent({
  name: "Home",
  setup() {
    const proyectos = ref(entradas.filter(entrada => entrada.tipo === 4));
    return { proyectos };
  }
});
</script>
<style>
.footer-nota {
  text-align: right;
}
</style>
