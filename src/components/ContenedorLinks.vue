<template>
  <div class="navbar">
    <h3>{{ titulo }}</h3>
    <ul>
      <li v-for="link in links" v-bind:key="link">{{ link }}</li>
    </ul>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContenedorLinks",
  props: {
    titulo: String,
    links: Array
  }
});
</script>
<style scoped>
.navbar {
  background: #d6e6f2;
  border: 1px solid #457585;
  border-radius: 15px;
  box-shadow: 2px 2px 5px grey;
  text-align: center;
  margin-bottom: 10%;
}
.navbar ul {
  list-style: none;
  width: 100%;
  text-align: center;
  padding-inline-start: 0px;
}

.navbar ul li {
  width: 90%;
  margin: 15px auto;
  border-radius: 7px;
  border: 2px solid #506362;
  background: #6c929f;
  color: #104050;
  box-shadow: 2px 2px 5px grey;
}
.navbar ul li a {
  text-decoration: none;
}
</style>
