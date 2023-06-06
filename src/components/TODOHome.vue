<template>
  <v-container
        fluid
  >
    <v-row 
          align="center" 
          justify="center"
        >
      <v-col cols="5" class="text-center max-min-width-list">
        <div
          class="d-flex align-center"
        >
          <v-text-field
            v-model="taskVal" 
            v-bind:label="nameVal ? 'Task' : 'Error Login'"
            v-bind:disabled="!nameVal"
            hide-details="auto"
            v-on:keydown.enter="addToList"
            autofocus
          ></v-text-field>
          <v-btn
            v-on:click="addToList"
          >
          <v-icon>mdi-note-plus</v-icon>
        </v-btn>
        
      </div>
      
        <Account />

        <v-col 
          class="mt-6"
          v-if="todoList.length > 0"
        >
          <Task
            v-bind:item="item"  
            v-for="item in reversedList"
            v-bind:key="item.id"
          />
        </v-col>
        <p 
          v-else
          class="mt-5 text-h5"
          >No tasks here</p>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import Task from '@/components/Task.vue'
  import Account from '@/components/Account.vue'
  import utils from '../utils.js'
  import { format } from 'date-fns'
  import { v4 as uuidv4 } from 'uuid'

  export default {
    name: 'TODOHome',
    mixins: [utils],
    components: {
    Account,
    Task,
},
    data: () => ({
      taskVal: "",
      }),

      methods: {
        addToList() {
          const taskValue = this.taskVal.trim()
          const currDate = new Date()
          const formatDate = format(currDate, "dd MMM HH:mm")
          if(taskValue) {
            this.$store.dispatch(
              "addTodoItem",
            {
              id: uuidv4(),
              name: this.nameVal,
              task: taskValue,
              date: formatDate,
              completed: false,
              editing: false
            })
            this.taskVal = ""
          }
            
        },
      },
    }
</script>

<style>

  .completed {
    opacity: .75;
  }
  .lineThrough {
    text-decoration: line-through;
  }
  .userColor {
    color: hsl(188, 100%, 39%);
  }
  .max-min-width-list {
    max-width: 550px;
    width: 100%;
    min-width: 330px;
  }
  
</style>