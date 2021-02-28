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
  min-width: 80%;
  margin-left: 1%;
}
</style>
