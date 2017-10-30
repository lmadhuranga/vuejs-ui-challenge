<template>
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <nav-bar title="Home Page" :isNew="false"></nav-bar>
    <main
      style="max-height: 600px;"
      class="scroll-y"
      id="scrolling-techniques"
    >
      <side-menu :users="users"></side-menu>
    </main>
  </v-app>
</template>

<script>
  import UserList from "../user/UsersList.vue";
  import SideMenu from "../template/SideBar.vue";
  import NavBar from "../template/NavBar.vue";

  export default {
    components: {
      NavBar,
      SideMenu,
      UserList,
    },
    props: ['users']

  }
</script>
