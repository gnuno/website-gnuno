<template>
  <header>
    <div class="logo">
      <img src="@/assets/tuxgnu.png" alt="Logo Tux y GNU" />
    </div>
    <div class="inner">
      <h2>
        {{ titulo }}
      </h2>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Header",
  setup() {
    const titulo = ref(
      "GNUno - Usuarios de GNU/Linux de la Universidad Nacional del Oeste"
    );

    return { titulo };
  }
});
</script>
<style>
header {
  background: #022835;
  border-bottom: 2px solid #022835;
  color: #6c929f;
  box-shadow: 2px 2px 5px grey;
  text-shadow: 2px 2px 4px #000000;
  min-height: 200px;
  margin-bottom: 1%;
  padding: 0;
}
.logo {
  margin-left: 1%;
  display: inline-block;
  vertical-align: middle;
}
.inner {
  display: inline-block;
  margin-left: 5%;
  font-weight: bolder;
}
</style>
