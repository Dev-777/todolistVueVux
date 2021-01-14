<template>
  <div class="item">
    <label>
      <input type="checkbox" />
    </label>
    <p>{{ item.title }}</p>
    <div @click="deleteItem">&#10006;</div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  methods: {
    deleteItem() {
      this.$store.commit("deleteItem", this.item.id);
      this.item.id;
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  background-color: darkgray;
  margin: 7px 0 0 0;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
}
</style>
