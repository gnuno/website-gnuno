<template>
  <div id="root">
    <Header></Header>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import Header from "@/components/Header";

export default defineComponent({
  name: "app",
  components: { Header },
  setup() {}
});
</script>
<style>
#root {
  font-family: "Fira Code Medium" !important;
}
</style>
