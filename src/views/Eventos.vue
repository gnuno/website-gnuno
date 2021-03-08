<template>
  <h1>Eventos</h1>
  <div v-for="evento in eventos" v-bind:key="evento" class="nota">
    <h2>{{ evento.titulo }}</h2>
    <p>{{ evento.cuerpo }}</p>
    <hr />
    <p class="footer-nota">
      Escrito por {{ evento.autor }} - {{ evento.fecha }}
    </p>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import entradas from "@/mock/entradas";

export default defineComponent({
  name: "Home",
  setup() {
    const eventos = ref(entradas.filter(entrada => entrada.tipo === 3));
    return { eventos };
  }
});
</script>
<style>
.footer-nota {
  text-align: right;
}
</style>
