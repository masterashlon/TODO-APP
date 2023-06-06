
export default {
    computed: {
      nameVal() {
        return this.$store.state.nameVal
      },
      todoList() {
        return this.$store.state.todoList
      },
      reversedList() {
        return this.todoList.slice().reverse()
      },
    },
    methods: {
      logout() {
        this.$store.dispatch("updateUser", "")
        this.$router.push("/")
      },
      deleteTask(itemId) {
        this.$store.dispatch("removeTodoItem", itemId)
      },
      updateEditableContent(item) {
        item.editing = false
        this.$store.dispatch("updateTodoItemProperty", {itemId: item.id, property: "task", value: item.task})
      },
      toggleContentEditable(item) {
        item.editing = !item.editing
        this.$store.dispatch("updateTodoItemProperty", {itemId: item.id, property: "task", value: item.task})
      },
      changeIsCompleted(item) {
        this.$store.dispatch("updateTodoItemProperty", {itemId: item.id, property: "completed", value: !item.completed})
      }
    },
  };