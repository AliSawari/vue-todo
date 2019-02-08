<template>
  <div>
    <div>
      <AddTodo @add="handleAdd"/>
    </div>
    <div>
      <TodosSearch/>
    </div>
    <div>
      <TodosList @toggle="handleToggle" :todos="todos"/>
    </div>
  </div>
</template>

<script>
import TodosList from "./TodoList";
import TodosSearch from "./TodoSearch";
import AddTodo from "./AddTodo";

export default {
  name: "Todos",
  components: { TodosList, TodosSearch, AddTodo },
  data() {
    return {
      todos: [
        { title: "Kube", id: 1, done: false },
        { title: "Docker", id: 2, done: true },
        { title: "Vue+VueEx", id: 3, done: false }
      ]
    };
  },
  methods: {
    handleAdd(item) {
      let toAdd = {
        title: item,
        id: this.todos.length + 1,
        done: false
      };
      this.todos.push(toAdd);
    },
    handleToggle(todo){
      let j = this.todos.indexOf(todo)
      this.todos[j].done = !todo.done
    }
  }
};
</script>
