<!-- eslint-disable vue/no-mutating-props -->
<template>
    <v-card
        class="c-flex justify-center align-center mb-10"
        :class="{completed: item.completed}"
        :disabled="!nameVal"
        :color="item.completed ? 'light-green lighten-4': 'yellow lighten-5' "
        >
        <v-row
            class="ml-2 mb-1"
            justify="start"
            align="center"
        >
            <v-btn
            class="shrink mr-4 mt-1"
            v-on:click="changeIsCompleted(item)"
            :class="{buttonCompleted: item.completed}"
            small
            >
            <v-icon
                color="green lighten-2"
            >mdi-check-{{item.completed ? "bold" : "outline"}}</v-icon>
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
            class="ml-1 mt-2"
            justify="start"
            align="center"
        >
            <v-btn
            class="mb-2 ml-1 mr-2"
            v-on:click="toggleContentEditable(item)"
            small
            >
            <v-icon>mdi-{{ !item.editing? "pen" : "check-underline-circle" }}</v-icon>
            </v-btn>
            <v-btn
            class="mb-1"
            v-on:click="deleteTask(item.id)"
            small
            >
            <v-icon
            color="red darken-4"
            >mdi-delete</v-icon>
            </v-btn>

        </v-row>
    </v-card>
</template>

<script>
    import utils from '../utils.js'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Task",
        props: ['item'],
        mixins: [utils],
        data: () => ({
            //
        })
        
    }
</script>