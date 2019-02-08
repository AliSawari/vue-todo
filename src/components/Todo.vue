<template>
  <div>
    <li @click="$emit('toggle',todo)" :class="{completed: todo.done}">
      {{todo.title}}
      <span title="Delete" @click="$emit('del', todo)" class="del"><b>X</b></span>
    </li>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"]
};
</script>

<style>
.del {
  font-size: 25px;
  float: right;
  color: #fff;
  border: 1px solid inherit;
  background-color: red;
  height: 25px;
  width: 25px;
  text-align: center;
  border-radius: 50%;
}
</style>
