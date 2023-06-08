<template>
  
  <v-container
        fluid
  >
    <v-row 
          align="center" 
          justify="center"
        >
      <v-col cols="5" class="text-center max-min-width-list">
        <v-row
          class="d-flex align-center justify-center"
        >
          <v-text-field
            v-model="searchVal" 
            :label="nameVal ? 'Cerca' : 'Error Login'"
            :disabled="!nameVal || !reversedListIsCompleted.length > 0"
            hide-details="auto"
            v-on:keydown.enter="searchToList"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-select
            :items="nameList"
            :label="nameVal ? 'Nome' : 'Error Login'"
            :disabled="!nameVal || !reversedListIsCompleted.length > 0"
            v-model="nameOnTask"
          >
            <template v-slot:item="{ item, attrs, on }">
              <v-list-item
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-title
                  v-bind:id="attrs['aria-labelledby']"
                  v-text="item"
                ></v-list-item-title>
              </v-list-item>
            </template>

          </v-select>
        </v-row>
        
        <Account />
        
        <v-col 
          class="mt-6"
          v-if="reversedListIsCompleted.length > 0"
        >
          <Task
            v-bind:item="item"  
            v-for="item in searchOnList"
            v-bind:key="item.id"
          />
          
        </v-col>
        <p 
          v-else
          class="mt-5 text-h5"
          >No completed tasks</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Task from '@/components/Task.vue'
  import Account from '@/components/Account.vue'
  import utils from '../utils.js'


  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'PageCompleted', 
    mixins: [utils],
    components: {
      Account,
      Task,
    },
    computed: {
      reversedListIsCompleted(){
        return this.reversedList.filter(item => item.completed)
      },
      searchOnList() {
        return this.reversedListIsCompleted.filter(item => {
          
          const isSameName = item.name === this.nameOnTask
          const isTextSearch = item.name.toLowerCase().includes(this.searchVal.toLowerCase() ) || 
          item.task.toLowerCase().includes(this.searchVal.toLowerCase() )

          if(this.nameOnTask)
            return isSameName && isTextSearch
          else
            return isTextSearch
        })
      },
      nameList() {
        return this.reversedListIsCompleted.map(item => item.name)
      }
    },
    data: () => ({
      searchVal: "",
      nameOnTask: "",
    }),
  }
</script>

<style scoped>
</style>