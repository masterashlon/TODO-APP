import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    todoList: [
      {
        id: 0,
        name: "Piero",
        task: "Comprare il latte",
        date: "15 May 16:45",
        completed: false,
        editing: false
      },
      {
        id: 1,
        name: "Piero",
        task: "Impastare il pane",
        date: "31 May 14:45",
        completed: false,
        editing: false
      },
      {
        id: 2,
        name: "Simone",
        task: "Dipingere Casa",
        date: "1 June 08:45",
        completed: true,
        editing: false
      },
      {
        id: 3,
        name: "Michela",
        task: "Andare dal dottore",
        date: "3 June 08:15",
        completed: false,
        editing: false
      },
      {
        id: 4,
        name: "Michela",
        task: "Costruire una casetta per il cane",
        date: "3 June 11:16",
        completed: true,
        editing: false
      },
    ],
    nameVal: "",
  },
  getters: {
  },
  mutations: {
    setUser(state, newValue) {
      state.nameVal = newValue
    },
    addTodoItem(state, item) {
      state.todoList.push(item)
    },
    removeTodoItem(state, index) {
      state.todoList.splice(index, 1)
    },
    updateTodoItem(state, { index, item }) {
      state.todoList.splice(index, 1, item)
    },
    updateTodoItemProperty(state, { index, property, value }) {
      state.todoList[index][property] = value;
    },
  },
  actions: {
    updateUser({ commit }, newValue) {
      commit('setUser', newValue)
    },
    addTodoItem({ commit }, item) {
      commit('addTodoItem', item)
    },
    removeTodoItem({ commit }, index) {
      commit('removeTodoItem', index)
    },
    updateTodoItem({ commit }, { index, item }) {
      commit('updateTodoItem', { index, item })
    },
    updateTodoItemProperty({ commit }, { index, property, value }) {
      commit('updateTodoItemProperty', { index, property, value });
    },
  },
  modules: {
  }
})
