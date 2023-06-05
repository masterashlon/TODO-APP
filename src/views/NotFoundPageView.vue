<template>
    <v-container
        fluid
        fill-height
        style="align-items: center"
    >
      <h1>404 - Pagina non trovata</h1>
      <p>La pagina che stai cercando non esiste.</p>
      <router-link to="/">Torna alla pagina di login</router-link>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage'
  }
  </script>
  