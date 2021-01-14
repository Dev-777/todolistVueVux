import { createStore } from "vuex";
import { v4 } from "uuid";

export default createStore({
  state: {
    list: [],
  },
  mutations: {
    addItem(state, payload) {
      state.list.push({ title: payload, id: v4() });
    },
    deleteItem(state, payload) {
      for (let i = 0; i < state.list.length; ++i) {
        if (state.list[i].id === payload) {
          state.list.splice(i, 1);
        }
      }
    },
  },
  actions: {},
});
