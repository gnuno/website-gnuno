<template>
  <div id="root">
    <Header></Header>
    <BarraLateral></BarraLateral>
    <ContenedorPrincipal></ContenedorPrincipal>
    <Footer></Footer>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BarraLateral from "@/components/BarraLateral";
import ContenedorPrincipal from "@/components/ContenedorPrincipal";

export default defineComponent({
  name: "app",
  components: { ContenedorPrincipal, BarraLateral, Footer, Header },
  setup() {}
});
</script>
<style>
#root {
  font-family: "Fira Code Medium" !important;
}
.nota {
  border: 2px solid #457585;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px grey;
}
</style>
