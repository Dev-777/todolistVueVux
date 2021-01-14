<template>
  <div class="app">
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";

export default {
  name: "App",
  components: {
    ToDoList,
  },
};
</script>

<style scoped>
.app {
  display: flex;
  justify-content: center;
}
</style>
