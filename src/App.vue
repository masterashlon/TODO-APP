<template>
  <v-app
    style="background-color: #cae3de; background-image: linear-gradient(130deg, #cae3de 40%, #b4bce7 100%);"
  >
    <v-app-bar
      app
      color="blue-grey lighten-1"
      dark
    >
      <div class="d-flex align-center ">
        <router-link to="/about"> 
          <v-img
            alt="Vuetify Logo"
            class="shrink"
            contain
            src="./assets/logo.png"
            transition="scale-transition"
            width="50"
          />
        </router-link>

          <h2
            class="shrink hidden-sm-and-down"
          >To-Do List
          </h2>
        </div>
      <v-spacer></v-spacer>
      <router-link :to="redirect"> 
        <v-btn
          href="javascript:void(0)"
          target=""
          color="blue-grey"
        >
          <span class="mr-1 text-sm-body-2">{{ quoteLink }}</span>
          <v-icon>mdi-open-in-app</v-icon>
        </v-btn>
      </router-link>

      <v-btn
        v-if="textLink"
        href="javascript:void(0)"
        color="blue-grey"
        v-on:click="changePage"
        class="ml-2"
      >
        <span class="mr-1 text-sm-body-2">{{ textLink }}</span>
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
    onLogin: false,
    textLink: "",
    quoteLink: "quotes",
    redirect: "/albo",
  }),
  computed: {
    nameVal() {
      return this.$store.state.nameVal
    }
  },
  watch: {
    '$route.path': {
      handler(path) {
        // Change route links
        if (path === "/login") {
          this.textLink = ""
          this.redirect = "/albo"
          this.quoteLink = "albo"
        }
        else if (path === "/home") {
          this.textLink = "completati"
          this.redirect = "/albo"
          this.quoteLink = "albo"

        }

        else if (path === "/completati") {
          this.textLink = "aggiungi"
          this.redirect = "/albo"
          this.quoteLink = "albo"
        }

        else if (path === "/albo") {
          if(this.nameVal) {
            this.textLink = "aggiungi"
          } else {
            this.quoteLink = "Log In"
            this.redirect = "/"
            this.textLink = ""
            
          }
        }
        else if (path === "/about") {
          if(this.nameVal) {
            this.textLink = "aggiungi"
            this.quoteLink = "albo"
            this.redirect = "/albo"
          } else {
            this.textLink = ""
            this.quoteLink = "Log In"
            this.redirect = "/"
          }
          
        }
        if(path === "")
          this.onLogin = true
        else
          this.onLogin = false
      },
      immediate: true, 
    }
  },
  methods: {
    changePage(){
      if (this.textLink === 'completati') {
        this.$router.push('/completati')
      } else if (this.textLink === 'aggiungi') {
        this.$router.push('/home')
      }
    }
  },
  beforeMount() {
      if(this.nameVal && this.onLogin)
        this.$router.push('/home')
  }
};
</script>

<style>
</style>
