<template>
  <div>
    <div><Welcome /></div>
    <div>
      <Todos/>
    </div>
  </div>
</template>

<script>
import Welcome from "./Welcome";
import Todos from "./Todos";

export default {
  name: "App",
  components: { Todos, Welcome }
};
</script>

<style>
* {
  transition: 0.5s;
  font-family: monospace;
}

.welcome {
  font-size: 3.5rem;
  font-weight: initial;
  text-align: left;
  color: #00fff2;
}

html {
  text-align: center;
}

body {
  max-width: 500px;
  margin: 0 auto;
}

input {
  padding-top: 30px;
  width: 500px;
  height: 60px;
  font-size: 30px;
  border: 0;
}

input:focus {
  outline: none;
}

li {
  text-align: left;
  font-size: 40px;
  list-style: none;
  margin: 0;
}

li:hover {
  text-decoration: line-through;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #d6d6d6;
}
</style>
