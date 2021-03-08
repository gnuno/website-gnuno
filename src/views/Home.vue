<template>
  <h1>[[ LUG: Universidad Nacional del Oeste ]]</h1>
  <div v-for="nota in notas" v-bind:key="nota" class="nota">
    <h2>{{ nota.titulo }}</h2>
    <p>{{ nota.cuerpo }}</p>
    <hr />
    <p class="footer-nota">Escrito por {{ nota.autor }} - {{ nota.fecha }}</p>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import entradas from "@/mock/entradas";

export default defineComponent({
  name: "Home",
  setup() {
    const notas = ref(entradas.filter(entrada => entrada.tipo === 1));
    return { notas };
  }
});
</script>
<style>
.footer-nota {
  text-align: right;
}
</style>
