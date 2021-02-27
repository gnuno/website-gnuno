<template>
  <footer>GNUNO {{ year }}</footer>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    const year = ref(new Date().getFullYear().toString());
    return { year };
  }
});
</script>
<style>
footer {
  width: 100%;
  font-size: 10px;
  text-align: center;
}
</style>
