<template id="floorManagersListMenu">
  <ul>
    <li>
      <p><router-link :to="{ path: `/setup/userAdd`}">Add Project Manager</router-link></p>
      <small>Loet 6, Schagen</small>
    </li>
    <li v-for="floorManager in filteredFloorManagers"  >
      <p><router-link v-bind:key="floorManager.id" :to="{ path: `/setup/shiftAdd/${floorManager.id}`}">{{floorManager.name}}</router-link></p>
      <small>Stationsweg 1, Breukelen</small>
    </li>
  </ul>
</template>

<script>
  export default {
    components: {},
    data(){
      return {
        search: ''
      }
    },
    name: 'FloorManagersListMenu',
    props: ['floorManagers'],
    computed: {
      filteredFloorManagers() {
        return this.floorManagers.filter(floorManager => {
          return floorManager.name.indexOf(this.search.toLowerCase()) > -1
        })
      }
    }
  }
</script>
