<template>
  <div>
    <table>
      <tr class="table-header">
        <td style="border-top-left-radius: 10px;">ID</td>
        <td>Titulo</td>
        <td>Autor</td>
        <td>Fecha</td>
        <td>Tipo</td>
        <td style="border-top-right-radius: 10px;">Estado</td>
      </tr>
      <tr v-for="entrada in entradas" v-bind:key="entrada" class="table-row">
        <td>1</td>
        <td>{{ entrada.titulo }}</td>
        <td>{{ entrada.autor }}</td>
        <td>{{ entrada.fecha }}</td>
        <td>{{ entrada.tipo }}</td>
        <td>
          <button @click="habilitar(entrada)">
            {{ entrada.estado ? "Habilitada" : "No Habilitada" }}
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import entradas_mock from "../mock/entradas";

export default defineComponent({
  name: "Admin",
  setup() {
    const entradas = ref(entradas_mock);
    const habilitar = entrada => {
      entrada.estado = !entrada.estado;
    };
    return { entradas, habilitar };
  }
});
</script>
<style scoped>
button {
  border: 2px solid black;
  border-radius: 10px;
  padding: 0.5em;
  font-family: "Fira Code", sans-serif;
}
table {
  width: 100%;
  margin: 20px auto;
}
td {
  padding: 0.3em;
  border: 2px solid black;
}
.table-header {
  width: 100%;
  color: wheat;
  background: #000;
  padding: 1em;
}
</style>
