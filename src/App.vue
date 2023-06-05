<template>
  <v-app
    style="background-color: #cae3de; background-image: linear-gradient(130deg, #cae3de 40%, #b4bce7 100%);"
  >
    <v-app-bar
      app
      color="blue-grey lighten-1"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="50"
        />

        <h2
          class="shrink hidden-sm-and-down"
          text="ToDoApp"
        >To-Do List
        </h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="javascript:void(0)"
        target=""
        color="blue-grey"
      >
        <span class="mr-1">completati</span>
        <v-icon>mdi-open-in-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
};
</script>
