<template>
  <div>
    <div>
      <AddTodo @add="handleAdd"/>
    </div>
    <div>
      <TodosSearch @searchText="handleSearch"/>
    </div>
    <div>
      <TodosList @del="handleDel" @toggle="handleToggle" :todos="todoHandler()"/>
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
      ],
      searchText: ""
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

    handleToggle(todo) {
      let j = this.todos.indexOf(todo);
      this.todos[j].done = !todo.done;
    },

    handleSearch(txt) {
      this.searchText = txt.toLowerCase()
    },

    handleDel(todo){
      this.todos = this.todos.filter(t => t !== todo ? t : null)
    },

    todoHandler(){
      let txt = this.searchText 
      if(txt){
        return this.todos.filter(t => t.title.toLowerCase().includes(txt) ? t : null)
      } else {
        return this.todos
      }
    }
  }
};
</script>
