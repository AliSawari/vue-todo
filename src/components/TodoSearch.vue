<template>
  <div>
    <input @keyup="does" type="text" name="search" placeholder="Seach">
  </div>
</template>

<script>
export default {
  name: "TodoSearch",
  methods: {
    does(e) {
      this.$emit("searchText", e.target.value);
    }
  }
};
</script>
