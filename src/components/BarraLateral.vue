<template>
  <div class="barra_lateral">
    <div class="navbar">
      <ul>
        <li>Inicio</li>
        <li>Software Libre</li>
        <li>¿Qué es GNUno?</li>
        <li>Artículos</li>
        <li>Proyectos</li>
        <li>Eventos</li>
        <li>Chat</li>
        <li>Contacto</li>
      </ul>
    </div>
  </div>
</template>

<script></script>
<style>
.barra_lateral {
  display: block;
  float: left;
  margin-left: 1%;
  width: 15%;
}
.navbar {
  background: #d6e6f2;
  border: 1px solid #457585;
  border-radius: 15px;
  box-shadow: 2px 2px 5px grey;
  text-align: center;
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
