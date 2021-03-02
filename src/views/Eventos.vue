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
import { defineComponent } from "vue";
import eventos from "@/mock/eventos";

export default defineComponent({
  name: "Home",
  data() {
    return {
      eventos: eventos
    };
  }
});
</script>
<style>
.footer-nota {
  text-align: right;
}
</style>
