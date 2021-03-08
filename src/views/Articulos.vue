<template>
  <h1>Articulos</h1>
  <div v-for="articulo in articulos" v-bind:key="articulo" class="articulo">
    <h2>{{ articulo.titulo }}</h2>
    <p>{{ articulo.cuerpo }}</p>
    <hr />
    <p class="footer-articulo">
      Escrito por {{ articulo.autor }} - {{ articulo.fecha }}
    </p>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import entradas from "@/mock/entradas";

export default defineComponent({
  name: "Home",
  setup() {
    const articulos = ref(entradas.filter(entrada => entrada.tipo === 2));
    return { articulos };
  }
});
</script>
<style>
.footer-articulo {
  text-align: right;
}
</style>
