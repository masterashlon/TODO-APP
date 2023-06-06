<template>

    <v-container
        fluid
        fill-height
        style="align-items: center"
    >
        <v-row align="center" justify="center">
            <v-col cols="10" class="text-center max-min-width">
                <h1
                    class="text-h2"
                >Error 404</h1>
                <h3
                    class="text-h5"
                >Pagina non trovata</h3>
                <p>La pagina che stai cercando non esiste.</p>
                <router-link to="/">Torna alla pagina di Log-In</router-link>
            
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Page404',

    data: () => ({
        //
    }),
}
</script>