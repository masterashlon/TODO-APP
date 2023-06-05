<template>
    <v-container
        fluid
        fill-height
        style="align-items: center"
    >
        <v-row align="center" justify="center">
        <v-col cols="5" class="text-center max-min-width">
            <v-form>
                <v-text-field
                    v-model="nameVal" 
                    label="Nome"
                    hide-details="auto"
                    validate-on-blur
                    required
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

    data: () => ({
        nameVal: "",
    }),
    methods: {
        login() {
            if(!this.nameVal)
                return
            this.$router.push({
                name: "home",
                params: {
                    nameVal: this.nameVal
                }
            });
        }
    }
}
</script>

<style scoped>
    .max-min-width {
        max-width: 450px;
        min-width: 250px;
    }
</style>
  