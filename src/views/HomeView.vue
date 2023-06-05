<template>
  <TODOHome :nameVal ="nameVal"/>
</template>

<script>
  import TODOHome from '@/components/TODOHome.vue';

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    components: {
      TODOHome,
    },
    props: ['nameVal']
  }
</script>
