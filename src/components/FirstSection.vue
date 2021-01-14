<template>
  <label>
    <input
      v-model="inputValue"
      type="text"
      @keyup.enter="inputValue ? add() : null"
    />
  </label>
  <button @click="inputValue ? add() : null">add</button>
  <div>
    <div v-for="item in $store.state.list" :key="item + 2">
      <Item v-bind:item="item" />
    </div>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "FirstSection",
  components: { Item },
  methods: {
    add() {
      this.$store.commit("addItem", this.inputValue);
      this.inputValue = "";
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style scoped>
input {
  height: 30px;
  width: 300px;
}
</style>
