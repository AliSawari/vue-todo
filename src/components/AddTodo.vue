<template>
  <div>
    <form @submit="does">
      <input type="text" name="add" placeholder="Add">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  methods: {
    does(e){
      e.preventDefault()
      let {value} = e.target.add
      this.$emit('add', value)
      e.target.add.value = ''
    }
  }
}
</script>

