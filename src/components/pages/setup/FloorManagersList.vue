<style scoped>
</style>
<template>
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <main
      style="max-height: 600px;"
      id="scrolling-techniques"
    >
      <h2>Floor Managers List</h2>
      <floor-managers-list-menu :floorManagers="users"></floor-managers-list-menu>
      <!--<router-link :to="{ path: '/setup/useradd'}">Add User</router-link>-->
    </main>
  </v-app>
</template>

<script>
  import FloorManagersListMenu from "../../template/FloorManagersListMenu";

  export default {
    components: {
      FloorManagersListMenu,
    },
    props: ['users']

  }
</script>
