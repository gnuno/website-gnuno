<template>
  <div id="contenedor">
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContenedorPrincipal"
});
</script>
<style scoped>
#contenedor {
  display: inline-block;
  max-width: 80%;
  margin: auto 0px;
  margin-left: 1%;
}
</style>
