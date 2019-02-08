<template>
  <div>
    <h1>Hey there {{msg}} with the age of {{age}}</h1>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: ["msg", "age"]
};
</script>

