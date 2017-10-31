<template id="personDetails">
  <v-container>
    <h2>SelectedShift {{shift.name}}</h2>
    <router-link :to="{ path: '/setup/projectsList'}">Projects List</router-link>
  </v-container>
</template>
<script>

  export default {
    components: {},
    name: 'SelectedShift',
    props: ['projects', 'users'],
    methods: {},
    computed: {
      shift  () {
        let projectId = this.$route.params.projectId;
        let shiftId = this.$route.params.id;
        return this.projects[projectId].shifts[shiftId];
      },
      project (){
        let projectId = this.$route.params.projectId;
        return this.projects[projectId]
      }
    }
  }
</script>
