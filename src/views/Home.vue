<template>
  <div v-for="nota in notas" v-bind:key="nota" class="nota">
    <h2>{{ nota.titulo }}</h2>
    <p>{{ nota.cuerpo }}</p>
    <hr />
    <p class="footer-nota">Escrito por {{ nota.autor }} - {{ nota.fecha }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import notas from "@/mock/notas";

export default defineComponent({
  name: "Home",
  data() {
    return {
      notas: notas
    };
  }
});
</script>
<style>
.footer-nota {
  text-align: right;
}
.nota {
  border: 2px solid #457585;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px grey;
}
</style>
