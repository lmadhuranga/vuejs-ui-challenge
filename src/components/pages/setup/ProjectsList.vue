<template>
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <main
      style="max-height: 600px;"
      id="scrolling-techniques"
    >
      <h2>Project List</h2>
      <project-list-menu :projects="projects" :selectedproject="selectedproject" ></project-list-menu>
    </main>
  </v-app>
</template>

<script>
  import ProjectListMenu from "../../template/ProjectListMenu";

  export default {
    components: {
      ProjectListMenu
    },
    name: 'ProjectList',
    props: ['users', 'projects', 'selectedproject']

  }
</script>
