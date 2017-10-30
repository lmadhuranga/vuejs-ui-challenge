<template id="userAdd">
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <v-container>
      <h2>Shift Add {{this.$route.params.userId}}</h2>

    </v-container>
  </v-app>
</template>


<script>


  export default {
    components: {},
    name:'ShiftAdd',
    props:['users', 'projects']
  }
</script>


