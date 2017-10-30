<template id="personDetails">
    <v-container>
      <h2>SelectedShift</h2>
      <router-link :to="{ path: '/setup/projectsList'}">Projects List</router-link>
    </v-container>
</template>
<script>

  export default {
    components: {},
    props: ['projects']

  }
</script>
