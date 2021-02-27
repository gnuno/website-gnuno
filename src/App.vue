<template>
  <div id="root">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default defineComponent({
  name: "app",
  components: { Footer, Header },
  setup() {}
});
</script>
<style>
#root {
  font-family: "Fira Code Medium" !important;
}
</style>
