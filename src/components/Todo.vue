<template>
  <div>
    <li v-on="{click: clicked}" :class="{completed: todo.isDone}">
      {{todo.title}}
    </li>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    clicked(s){
      console.log(s.target)
    }
  }
};
</script>

