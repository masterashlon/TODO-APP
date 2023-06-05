<template>
  <v-container
        fluid
        style="align-items: center"
    >
        <v-row 
          align="center" 
          justify="center"
        >
        <v-col cols="3" class="text-center max-min-width-list">
        <div
          class="d-flex align-center"
        >
          <v-text-field
            v-model="taskVal" 
            label="Task"
            hide-details="auto"
            v-on:keydown.enter="addToList"
          ></v-text-field>
          <v-btn
            v-on:click="addToList"
          >
          <v-icon>mdi-note-plus</v-icon>
          </v-btn>

        </div>
        <v-col 
          class="mt-6 max-min-width-list"
          v-if="items.length > 0"
        >
          <v-card
            v-bind:item="item"
            v-for="(item, index) in reversedItems"
            v-bind:key="item.id"
            class="c-flex justify-center align-center mb-10"
            :class="{completed: item.completed}"
          >
            <v-row
              class="ml-2 mb-1"
              justify="start"
              align="center"
            >
              <v-btn
                style=""
                class="shrink mr-4 mt-1"
                v-on:click="changeIsCompleted(index)"
                :class="{buttonCompleted: item.completed}"
                >
                <v-icon
                  color="green lighten-2"
                
                >mdi-{{item.completed ? "check-bold" : "check-outline"}}</v-icon>
              </v-btn>
              <span
                class="mt-1"
                :class="{userColor: item.name === nameVal}"
              >{{ item.name }}</span>
            </v-row>
            <v-row
              class="ml-5 mb-2 mr-5 mt-4"
              justify="start"
              align="center"
            >
              <span
                v-if="!item.editing"
                class="text-body-1"
                :class="{lineThrough: item.completed}"
                spellcheck="false"
              >{{ item.task }}</span>
              <v-text-field
                v-else
                autofocus 
                v-model="item.task" 
                v-on:blur="updateEditableContent(item)"
                v-on:keydown.enter="updateEditableContent(item)"
              ></v-text-field>
            </v-row>
            <v-row
              class="ml-2 mr-2 mt-2 mr-2"
              justify="end"
              align="center"
            >
              <span
                class="mb-2 text-body-2"
              >Created: {{ item.date }}</span>
            </v-row>
            <v-row
              class="ml-2 mr-2 mt-2"
              justify="start"
              align="center"
            >
              <v-btn
                class="mb-2 ml-2 mr-2"
                v-on:click="toggleContentEditable(item)"
              >
              <v-icon>mdi-{{ !item.editing? "pen" : "check-underline-circle" }}</v-icon>
              </v-btn>
              <v-btn
                class="mb-1"
                v-on:click="deleteTask(index)"
              >
              <v-icon
                color="red darken-4"
              >mdi-delete</v-icon>
              </v-btn>

            </v-row>
          </v-card>
        </v-col>
        <p v-else>No tasks here</p>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import { format } from 'date-fns'

  export default {
    name: 'TODOHome',
    props: ["nameVal"],
    data: () => ({
      taskVal: "",
      isCompleted: "1",
      item: null,
      items: [
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
        ]
      }),
      computed: {
        reversedItems() {
          return this.items.slice().reverse()
        },

      },
      methods: {
        addToList() {
          const taskValue = this.taskVal.trim()
          const currDate = new Date()
          const formatDate = format(currDate, "dd MMM HH:mm")
          if(taskValue) {
            this.items.push({
              id: this.items.length,
              name: this.nameVal,
              task: taskValue,
              date: formatDate,
              completed: false,
              editing: false
            })
            this.taskVal = ""
          }
            
        },
        deleteTask(index) {
          const originalIndex = this.items.length - 1 - index
          this.items.splice(originalIndex, 1)
        },
        updateEditableContent(item) {
          item.editing = false
        },
        toggleContentEditable(item) {
          item.editing = !item.editing
        },
        changeIsCompleted(index) {
          const originalIndex = this.items.length - 1 - index
          this.items[originalIndex].completed = !this.items[originalIndex].completed
        }
      },
      beforeMount() {
      },
    }
</script>

<style scoped>
  .completed {
    opacity: .6;
  }
  .lineThrough {
    text-decoration: line-through;
  }
  .userColor {
    color: hsl(188, 100%, 39%);
  }
  .max-min-width-list {
    width: 800px;
    min-width: 310px;
  }
  
</style>