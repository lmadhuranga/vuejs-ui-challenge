<style scoped>
</style>

<template id="personDetails">
  <v-container>
    <h2> {{shift.name}} Shift</h2>
    <h3>{{project.name}} Project </h3>
    <h4>Floor Manager {{floorManager.name}}</h4>
    <router-link :to="{ path: '/setup/projectsList'}">Projects List </router-link>
  </v-container>
</template>
<script>
  import _ from 'lodash'
  export default {
    components: {},
    name: 'SelectedShift',
    props: ['projects', 'users'],
    methods: {
    },
    computed: {
      shift  () {
        let projectId = this.$route.params.projectId;
        let shiftId = this.$route.params.shiftId;
        let shift = _.filter(this.projects[projectId].shifts, (shift) => {return shift.id==shiftId; });
        return shift[0];
      },
      project (){
        let projectId = this.$route.params.projectId;
        return this.projects[projectId]
      },
      floorManager(){
        let floorManager = _.filter(this.users, (user) => { return user.id==this.shift.userId; });
        return floorManager[0];
      }

    }
  }
</script>
