<template>
  <div class="toDoList">
    <FirstSection />
  </div>
</template>

<script>
import FirstSection from "./FirstSection";
export default {
  name: "ToDoList",
  components: { FirstSection },
};
</script>

<style scoped>
.toDoList {
  width: 500px;
  height: 550px;
  border: 1px solid black;
  margin: 10px 0 0 0;
}
</style>
