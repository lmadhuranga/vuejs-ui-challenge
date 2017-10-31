<template>
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <main
      style="max-height: 600px;"
      id="scrolling-techniques"
    >
      <form action="">
        <h4>SetupContainer</h4>
        <router-view :users="users" :projects="projects" :selectedproject="selectedproject"></router-view>
      </form>
    </main>
  </v-app>
</template>

<script>
  import NavBar from "../template/NavBar.vue";

  export default {
    components: {
      NavBar,
    },
    props: ['users', 'projects', 'selectedproject']

  }
</script>
