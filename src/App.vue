<template>
  <div id="root">
    <Header></Header>
    <BarraLateral></BarraLateral>
    <Footer></Footer>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BarraLateral from "@/components/BarraLateral";

export default defineComponent({
  name: "app",
  components: { BarraLateral, Footer, Header },
  setup() {}
});
</script>
<style>
#root {
  font-family: "Fira Code Medium" !important;
}
</style>
