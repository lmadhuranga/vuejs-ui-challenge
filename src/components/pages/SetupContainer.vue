<style scoped>
  /*Home page wrapper*/
  .homeWraper {
    background-size: cover;
    background: url('/static/img/map.png') center;
    height: 100vh;
  }

  .homeWraper .header {
    background: #1d0325;
    display: flex;
    justify-content: space-between;
  }

  .homeWraper .header img {
    height: 60px;
  }

  /* Start screen*/
  .startScreen {
    margin-left: 10%;
    margin-top: 10%;
  }

  .startScreen h1 {
    color: #fff;
    font-size: 24px;
  }

  .startScreen h3 {
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .startScreen .wall {
    background: #fff;
    max-width: 240px;
  }

  /*Side panel*/
  .panelSmall {
    position: fixed;
    top: 0;
    background: #fff;
    max-width: 400px;
    height: 100vh;
    right: 0;
  }

</style>

<template>
  <div class="homeWraper">

    <div class="left">
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
      <div class="startScreen">
        <h1>Ervaren Freelancers <strong>On-Demand.</strong></h1>
        <h3>shift bij Loetje aan de Amstel +</h3>

        <!-- s wall -->
        <div class="wall">
          <form>
            <div class="field">
              <label for="projectList">Project</label>
              <select id="projectList">
                <option>Toppers in de ArenA sep '17</option>
                <option>Toppers in de ArenA oct '18</option>
              </select>
            </div>
            <div class="field">
              <label for="projectList">Functie</label>
              <select id="projectList">
                <option>Bediening: Hardwerkende ent</option>
                <option>End: Hardwerkende ent</option>
              </select>
            </div>
            <div class="flex">
              <div class="field">
                <label for="projectList">Functie</label>
                <select id="projectList">
                  <option>Bediening: Hardwerkende ent</option>
                  <option>End: Hardwerkende ent</option>
                </select>
              </div>
              <div class="field">
                <label for="projectList">Functie</label>
                <select id="projectList">
                  <option>Bediening: Hardwerkende ent</option>
                  <option>End: Hardwerkende ent</option>
                </select>
              </div>
            </div>
            <div class="flex">
              <div class="field">
                <label for="projectList">Functie</label>
                <select id="projectList">
                  <option>Bediening: Hardwerkende ent</option>
                  <option>End: Hardwerkende ent</option>
                </select>
              </div>
              <div class="field">
                <label for="projectList">Functie</label>
                <select name="projectList">
                  <option>Bediening: Hardwerkende ent</option>
                  <option>End: Hardwerkende ent</option>
                </select>
              </div>
            </div>
            <hr>
            <div class="field">
              <input type="checkbx" name="rememberMe" id="rememberMe">
              <label for="rememberMe">Maak nog een shift</label>
            </div>
            <div class="field">
              <button>Plaats Shift</button>
            </div>
          </form>
        </div>
        <!-- e wall -->
      </div>
      <!-- e start screen -->
    </div> <!--left panel-->


    <div class="sidePanelWrapper">
      <div class="wall panelSmall active">
        <a class="panelClose">X</a>

        <!-- s accordion wrap -->
        <div class="accordionWrap">

          <h4>SetupContainer</h4>
          <router-view :users="users" :projects="projects" :selectedproject="selectedproject"></router-view>
        </div> <!-- e accordion wrap -->
        <div class="panelFooter">
          <img src="panelFooter.jpg"/>
        </div>
      </div>
      <!-- e panel small -->
    </div> <!--sidePanelWrapper-->

  </div> <!--homeWraper-->
</template>

<script>
  import NavBar from "../template/NavBar.vue";

  export default {
    components: {
      NavBar,
    },
    props: ['users', 'projects', 'selectedproject', 'config'],
    mounted(){
      this.config.isSidePanelOpen = true;
    }

  }
</script>
