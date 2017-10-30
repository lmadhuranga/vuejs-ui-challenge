<template>
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <main
      style="max-height: 600px;"
      class="scroll-y"
      id="scrolling-techniques"
    >
      <side-menu :users="users"></side-menu>
      <router-link :to="{ path: '/setup/userAdd'}">Add User</router-link>
    </main>
  </v-app>
</template>

<script>
  import UserList from ".//UsersList.vue";
  import SideMenu from "../../template/SideBar.vue";

  export default {
    components: {
      SideMenu,
      UserList,
    },
    name:'UsersList',
    props: ['users']

  }
</script>
