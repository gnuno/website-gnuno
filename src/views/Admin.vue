<template>
  <div class="contenedor">
    <tabla-entradas></tabla-entradas>
  </div>
  <div class="contenedor">
    <editor></editor>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import TablaEntradas from "@/components/TablaEntradas";
import Editor from "@/components/Editor";

export default defineComponent({
  name: "Admin",
  components: { TablaEntradas, Editor }
});
</script>
<style scoped>
.contenedor {
  display: block;
}
</style>
