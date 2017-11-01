<style scoped>
  .panelMedium {
    position: fixed;
    top: 0;
    background: #fff;
    max-width: 600px;
    height: 100vh;
    right: 0;
    width: 100%;
  }

  .panelMedium.active:after {
    display: block;
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(15, 4, 35, 0.63);
    right: 600px;
    top: 0;
    z-index: -15;
  }

  .panelMedium .accordionBody {
    /*padding: 20px;*/
    display: none;
  }

  .panelMedium .accordionBody.active {
    display: block;
  }

  .panelMedium .accordionHeader {
    padding: 20px;
  }

  .panelMedium .panelClose {
    position: absolute;
    margin-left: -46px;
    margin-top: 15px;
    padding: 7px 10px;
    background: #fff;
    border-radius: 100%;
  }

  .panelMedium .tabHeaderCollection a {
    color: #9E9E9E;
    text-decoration: none;
    padding-bottom: 10px;
    border-bottom: 2px solid;
    width: 100%;
    text-align: center;
  }

  .panelMedium .tabHeaderCollection a.active {
    color: #7c2bad;
  }

  .panelMedium .tabHeaderCollection {
    display: flex;
    justify-content: space-evenly;
  }

  .panelMedium .helpText {
    margin-top: 20px;
    display: inline-block;
  }
</style>
<template>
  <div id="selectedShift" class="panelMedium active">
    <a class="panelClose">X</a>
    <div class="accordion">
      <div class="accordionHeader"><span> < </span> Nieuwe Opdrachtgever <span></span></div>
      <div class="accordionBody active">
        <tab-header-collection></tab-header-collection>
        <div class="tabBodyCollection">

          <!-- s tab Zoeken -->
          <div class="tabBody active">
            <h2> {{shift.name}} Shift</h2>
            <h3>{{project.name}} Project </h3>
            <h4>Floor Manager {{floorManager.name}}</h4>
            <router-link :to="{ path: '/setup/projectsList'}">Projects List </router-link>
          </div>
          <!-- e tab Zoeken -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import _ from 'lodash'
  import TabHeaderCollection from "../../template/TabHeaderCollection";
  export default {
    components: {TabHeaderCollection},
    name: 'SelectedShift',
    props: ['projects', 'users'],
    methods: {},
    computed: {
      shift  () {
        let projectId = this.$route.params.projectId;
        let shiftId = this.$route.params.shiftId;
        let shift = _.filter(this.projects[projectId].shifts, (shift) => {
          return shift.id == shiftId;
        });
        return shift[0];
      },
      project (){
        let projectId = this.$route.params.projectId;
        return this.projects[projectId]
      },
      floorManager(){
        let floorManager = _.filter(this.users, (user) => {
          return user.id == this.shift.userId;
        });
        return floorManager[0];
      }

    }
  }
</script>
