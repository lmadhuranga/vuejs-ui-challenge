<style scoped>
  .panelSmall {
    position: fixed;
    top: 0;
    background: #fff;
    max-width: 400px;
    height: 100vh;
    right: 0;
  }

  .wall {
    width: 100%;
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

  .panelClose {
    top:0;
    position: absolute;
    margin-left: -46px;
    margin-top: 15px;
    padding: 9px 10px 7px;
    background: #fff;
    border-radius: 100%;
    color: #444;
    text-decoration: none;
  }

  [name="slectShift"] {
    width: 0;
    height: 0;
    position: absolute;
    visibility: hidden;
  }

  .siftDetailWrap p{
    padding: 10px 0;
  }
  .siftDetailWrap strong{
    color: #888;
  }
  .siftDetailWrap{
    padding: 20px;
  }
  hr{
    margin: 20px 0;
    border: 0;
    border-bottom: 1px solid #ccc;
  }
  #selectedShift h2 small{
    font-size: 14px;
  }
</style>
<template>
  <div id="selectedShift">
    <!-- s panel small -->
    <div class="wall panelSmall active">
      <navigator msg="Projects List" path="/setup/projectsList"></navigator>
      <go-to-home></go-to-home>
      <header>
        <h2> {{shift.name}} <small>Shift Details</small></h2>
      </header>
      <div class="siftDetailWrap">
        <p> IBAN Number : <strong>{{shift.iban}}</strong> </p>
        <p> Description: <strong>{{shift.description}}</strong></p>
        <hr>
        <p>Project : <strong>{{project.name}} </strong> </p>
        <p>Floor Manager : <strong>{{floorManager.name}}</strong></p>
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
  import _ from 'lodash'
  import TabHeaderCollection from "../../template/TabHeaderCollection";
  import Navigator from "../../template/Navigator";
  import GoToHome from "../../template/GotoHome";
  export default {
    components: {
      GoToHome,
      Navigator,
      TabHeaderCollection
    },
    name: 'SelectedShift',
    props: ['projects', 'users'],
    data(){
      return {
        currentRoute: 'selectedShift'
      }
    },
    computed: {
      /**
       * Get the shift details from selected project's details
       */
      shift  () {
        if (!this.$route.params.projectId && !this.$route.params.shiftId) {
          this.$router.push('/setup/projectsList');
        }
        let projectId = this.$route.params.projectId;
        let shiftId = this.$route.params.shiftId;
        let shift = _.filter(this.projects[projectId].shifts, (shift) => {
          return shift.id == shiftId;
        });
        return shift[0];
      },
      /**
       * Get the project from projects main array
       * @returns {*}
       */
      project (){
        let projectId = this.$route.params.projectId;
        return this.projects[projectId]
      },
      /**
       * Find the floormanager from the user id
       */
      floorManager(){
        let floorManager = _.filter(this.users, (user) => {
          return user.id == this.shift.userId;
        });
        if (floorManager.length == 0) {
          this.$router.push('/setup/projectsList');
        }
        return floorManager[0];
      }

    }
  }
</script>
