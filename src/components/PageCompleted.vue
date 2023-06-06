<template>
  
  <v-container
        fluid
        style="align-items: center"
  >
    <v-row 
          align="center" 
          justify="center"
        >
      <v-col cols="5" class="text-center max-min-width-list">
        
        <v-row
          class="mt-2 ml-1"
          justify="start"
          align="center"
        >
          <v-icon
            size="40"
          >
            mdi-account-circle{{ nameVal ? "" : "-outline"}}
          </v-icon>
          <p
            v-if="nameVal"
            class="ml-1 text-h5 mt-4"
          >
            {{ nameVal }}
            <a
              class="ml-1 caption"
              @click="logout"
            >Log Out</a>
          </p>
          <p
            v-else
            class="ml-1 text-h6 mt-3"
          >
            <router-link to="/">Log In</router-link>
          </p>

        </v-row>

        <v-col 
          class="mt-6"
          v-if="todoList.length > 0"
        >
          <v-card
            v-bind:item="item"
            v-for="(item, index) in reversedListIsCompleted"
            v-bind:key="item.id"
            class="c-flex justify-center align-center mb-10"
            :class="{completed: item.completed}"
            style="width: 100%;"
            :disabled="!nameVal"
          >
            <v-row
              class="ml-2 mb-1"
              justify="start"
              align="center"
            >
              <v-btn
                style=""
                class="shrink mr-4 mt-1"
                v-on:click="changeIsCompleted(index, item)"
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
                v-on:blur="updateEditableContent(item, index)"
                v-on:keydown.enter="updateEditableContent(item, index)"
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
                v-on:click="toggleContentEditable(item, index)"
              >
              <v-icon>mdi-{{ !item.editing? "pen" : "check-underline-circle" }}</v-icon>
              </v-btn>
              <v-btn
                class="mb-1"
                v-on:click="deleteTask(item.index)"
              >
              <v-icon
                color="red darken-4"
              >mdi-delete</v-icon>
              </v-btn>

            </v-row>
          </v-card>
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
import utils from '../utils.js'


  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'PageCompleted', 
    mixins: [utils],
    computed: {
      reversedListIsCompleted(){
        return this.reversedList.filter(item => item.completed)
      }
    },
    data: () => ({
    }),
  }
</script>
