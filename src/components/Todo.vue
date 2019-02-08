<template>
  <div>
    <li @click="$emit('toggle',todo)" :class="{completed: todo.done}">
      {{todo.title}}
    </li>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"]
};
</script>

