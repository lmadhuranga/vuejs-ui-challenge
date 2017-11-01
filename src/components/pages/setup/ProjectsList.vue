<style scoped>
  .panelSmall {
    position: fixed;
    top: 0;
    background: #fff;
    max-width: 400px;
    height: 100vh;
    right: 0;
  }

  .panelSmall.active:after {
    display: block;
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(15, 4, 35, 0.63);
    right: 400px;
    top: 0;
    z-index: -15;
  }

  .panelSmall .panelClose {
    position: absolute;
    margin-left: -46px;
    margin-top: 15px;
    padding: 7px 10px;
    background: #fff;
    border-radius: 100%;
  }

  [name="slectShift"] {
    width: 0;
    height: 0;
    position: absolute;
    visibility: hidden;
  }

  .helpText {
    margin-top: 20px;
    display: inline-block;
  }
</style>

<template>
  <div id="projectList">
    <!-- s panel small -->
    <div class="wall panelSmall active" style="display: block">
      <go-to-home></go-to-home>
      <h2>Project List</h2>

      <div class="accordionWrap">
        <project-list-menu :projects="projects" :selectedproject="selectedproject"></project-list-menu>
      </div>

      <!-- e accordion wrap -->
      <div class="panelFooter">
        <img src="panelFooter.jpg"/>
      </div>
    </div>
    <!-- e panel small -->
  </div>
  <!-- e #projectList-->
</template>

<script>
  import ProjectListMenu from "../../template/ProjectListMenu";
  import GoToHome from "../../template/GotoHome";

  export default {
    components: {
      GoToHome,
      ProjectListMenu
    },
    name: 'ProjectList',
    props: ['users', 'projects', 'selectedproject']

  }
</script>
