<template>
    <v-container
        fluid
        fill-height
        style="align-items: center"
    >
        <v-row align="center" justify="center">
        <v-col cols="5" class="text-center max-min-width">
            <v-form
                validate
            >
                <v-text-field
                    v-model="nameLogin" 
                    label="Nome"
                    class="text-h6"
                    hide-details="auto"
                    autofocus
                    required
                    v-on:keydown.enter="login"
                >
                </v-text-field>
                <v-spacer
                    class="mt-4"
                ></v-spacer>
                <v-btn
                    v-on:click="login"
                >
                    Accedi
                </v-btn>
            </v-form>
        </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'PageLogin',
    computed: {
        nameVal() {
            return this.$store.state.nameVal
        },
    },
    data: () => ({
        nameLogin: "",
    }),
    methods: {
        login() {
            if(!this.nameLogin)
                return

            this.$store.dispatch('updateUser', this.nameLogin)
            this.$router.push("/home")
        },
    },
    mounted() {
      if(this.nameVal)
        this.$router.push('/home')
    }
}
</script>

<style scoped>
    .max-min-width {
        max-width: 400px;
        min-width: 250px;
    }
</style>
  