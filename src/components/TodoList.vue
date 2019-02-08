<template>
  <div>
    <ul v-for="t in todos" :key="t.id" >
      <Todo @toggle="$emit('toggle',t)" :todo="t" />
    </ul>
  </div>
</template>


<script>
import Todo from "./Todo";

export default {
  name: "TodoList",
  components: { Todo },
  props: ['todos']
}
</script>
