<template>
  <div>
    <ul v-for="t in todos" :key="t.id" >
      <Todo :todo="t" />
    </ul>
  </div>
</template>


<script>
import Todo from "./Todo";

export default {
  name: "TodoList",
  components: { Todo },
  data() {
    return {
      todos: [
        { title: "todo num 1", id: 1, isDone:false},
        { title: "todo num 2", id: 2, isDone:true},
        { title: "todo num 3", id: 3, isDone:false}
      ]
    }
  },
}
</script>
