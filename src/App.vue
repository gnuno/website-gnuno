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
</style>
