<template>
  <div>
    <div>
      <TodosSearch />
    </div>
    <div>
      <TodosList />
    </div>
  </div>
</template>

<script>
import TodosList from './TodoList'
import TodosSearch from './TodoSearch'

export default {
  name: "Todos",
  components: {TodosList,TodosSearch}
}
</script>
