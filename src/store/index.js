import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: []
  },
  getters: {
  },
  mutations: {
    addTodoItem(state, item) {
      state.todoList.push(item);
    },
    removeTodoItem(state, index) {
      state.todoList.splice(index, 1);
    },
    updateTodoItem(state, { index, item }) {
      state.todoList.splice(index, 1, item);
    },
  },
  actions: {
  },
  modules: {
  }
})
