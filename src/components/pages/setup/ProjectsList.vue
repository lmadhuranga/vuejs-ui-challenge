<template>
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <main
      style="max-height: 600px;"
      class="scroll-y"
      id="scrolling-techniques"
    >
      <h2>Project List</h2>
      <project-list-menu :projects="projects" :selectedproject="selectedproject" ></project-list-menu>
      <router-link :to="{ path: '/setup/floorManagersList'}">Floor Manager Select</router-link>
      <router-link :to="{ path: '/setup/selectedShift'}">Selected Shift</router-link>
    </main>
  </v-app>
</template>

<script>
  import UserList from "./UsersList.vue";
  import SideMenu from "../../template/SideBar.vue";
  import ProjectListMenu from "../../template/ProjectListMenu";

  export default {
    components: {
      ProjectListMenu,
      SideMenu,
      UserList,
    },
    name: 'ProjectList',
    props: ['users', 'projects', 'selectedproject']

  }
</script>
