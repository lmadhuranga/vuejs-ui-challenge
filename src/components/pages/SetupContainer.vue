<style scoped>
  .mainScreen {
    margin-left: 10%;
    margin-top: 10%;
  }

  .mainScreen h1 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 40px;
  }

  .mainScreen h3 {
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .mainScreen .field {
    padding: 10px;
  }

  .mainScreen .wall {
    background: #fff;
    max-width: 240px;
  }
</style>

<template>
  <div id="setupContainer">
    <div class="mainScreen">
      <h1>Ervaren Freelancers <strong>On-Demand.</strong></h1>
      <h3>shift bij Loetje aan de Amstel +</h3>
      <!-- s wall -->
      <div class="wall">
        <form v-on:submit.prevent="formSubmit()">
          <div class="field">
            <label for="projectList">Project</label>
            <select id="projectList">
              <option>Select Project</option>
              <option v-for="project in projects" v-bind:key="project.id">{{project.name}}</option>
            </select>
          </div>
          <hr>
          <div class="field">
            <input type="checkbx" name="rememberMe" id="rememberMe">
            <label for="rememberMe">Maak nog een shift</label>
          </div>
          <div class="field">
            <button>Select Project</button>
          </div>
        </form>
      </div>
      <!-- e wall -->
    </div>
    <!-- e end mainScreen -->

    <!-- e start sidePanelWrapper-->
    <div class="sidePanelWrapper">
      <router-view :users="users" :projects="projects" :selectedproject="selectedproject"></router-view>
    </div>
    <!-- e end sidePanelWrapper-->
  </div>
</template>

<script>
  export default {
    components: {},
    methods: {
      formSubmit(){
        this.$router.push(`/setup/projectsList`);
      }
    },
    props: ['users', 'projects', 'selectedproject', 'config'],
    mounted(){
      this.config.isSidePanelOpen = true;
    }

  }
</script>
