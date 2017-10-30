<template id="personDetails">
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <main
      style="max-height: 600px;"
      class="scroll-y"
      id="scrolling-techniques"
    >
      <v-container>
        <h2>SelectedShift</h2>
        <router-link :to="{ path: '/setup/projectsList'}">Projects List</router-link>
      </v-container>
    </main>
  </v-app>
</template>
<script>

  export default {
    components: {},

  }
</script>
