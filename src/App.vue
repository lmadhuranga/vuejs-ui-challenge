<style scoped>
  .app {
    background-size: cover;
    background: url('/static/img/map.png') center;
    height: 100vh;
  }

  .app .header {
    background: #1d0325;
    display: flex;
    justify-content: space-between;
  }

  .app .header img {
    height: 60px;
  }
</style>
<template>
  <div class="app">
    <!-- s header -->
    <div class="header">
      <div class="logo">
        <img src="/static/img/logo.png">
      </div>
      <div class="user">
        <img src="/static/img/user.png">
      </div>
    </div>
    <!-- e header -->
    <router-view
      :users="users"
      :projects="projects"
      :selectedproject="selectedproject"
      :config="config"
    ></router-view>
  </div>
  <!-- e end homePage-->
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
