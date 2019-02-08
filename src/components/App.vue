<template>
  <div>
    <h1>Main Component</h1>
    <div><Hello :msg="myName" :age="myAge" /></div>
    <div>
      <Todos />
    </div>
  </div>
</template>

<script>
import Hello from "./Hello";
import Todos from './Todos'

export default {
  name: "App",
  components: { Hello, Todos},
  data() {
    return {
      myName: "Reza",
      myAge: "15"
    };
  }
};
</script>

<style>

html {
  font-family: "Avenir Next", Helevetica, sans-serif;
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
  font-size: 40px;
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
}

</style>
