<template>
  <div id="app">
    <router-view
      :users="users"
      :projects="projects"
      :selectedproject="selectedproject"
      :config="config"
    ></router-view>
  </div>
</template>

<script>
  import data from './config/data';
  export default {
    name: 'app',
    data() {
      return {
        users: [],
        projects: [],
        selectedproject: {name: '', id: ''},
        config: {
          isSidePanelOpen: false
        }
      }
    },
    mounted(){
      this.users = data.users;
      this.projects = data.projects;
    }
  }
</script>
