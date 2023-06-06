
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
      deleteTask(index) {
        const originalIndex = this.todoList.length - 1 - index
        this.$store.dispatch("removeTodoItem", originalIndex)
      },
      updateEditableContent(item, index) {
        item.editing = false
        this.$store.dispatch("updateTodoItemProperty", {index: this.originalIndex(index), property: "task", value: item.task})
      },
      toggleContentEditable(item, index) {
        item.editing = !item.editing
        this.$store.dispatch("updateTodoItemProperty", {index: this.originalIndex(index), property: "task", value: item.task})
      },
      changeIsCompleted(index, item) {
        this.$store.dispatch("updateTodoItemProperty", {index: this.originalIndex(index), property: "completed", value: !item.completed})
      },
      originalIndex(index) {
        return this.todoList.length - 1 - index
      }
    },
  };