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
    props: ['users', 'projects', 'selectedproject', 'config'],
    mounted(){
      this.config.isSidePanelOpen = true;
    }

  }
</script>
