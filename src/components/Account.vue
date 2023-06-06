<template>
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
              v-on:click="logout"
            >Log Out</a>
          </p>
          <p
            v-else
            class="ml-1 text-h6 mt-3"
          >
            <router-link to="/">Log In</router-link>
          </p>

        </v-row>
</template>

<script>
import utils from '../utils.js'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Account',
    mixins: [utils],
    data: () => ({
        //
    })
}
</script>