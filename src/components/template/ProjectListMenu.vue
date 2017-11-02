<style scoped>
  .panelSmall .radioBtnBoxWrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .panelSmall .radioBtnBox {
    max-width: calc(50% - 10px);
  }

  .panelSmall .radioBtnBox .wall {
    height: 100%;
    padding: 5px;
    background: #efefef;
    display: block;
    cursor: pointer;
  }

  .panelSmall .radioBtnBox [name="slectShift"]:checked + .wall {
    background: #7664cc;
  }
  .panelSmall .accordionBody {
    /*padding: 20px;*/
    display: none;
  }
  .panelSmall .accordionBody.active {
    display: block;
  }
  .panelSmall .accordionHeader {
    padding: 20px;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #898d98;
    margin-top: 25px;
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
  .helpText{
    margin-top: 20px;
    display: inline-block;
  }

  button.small{
    width: 100px;
    margin-top: 21px;
  }
</style>
<template>
  <!-- s accordion wrap -->
  <div id="projectListMenu">
    <div class="accordion" v-for="project in projects" v-bind:key="project.id">
      <div class="accordionHeader"> {{project.name}} <span></span></div>
      <div class="accordionBody active">
        <div class="radioBtnBoxWrap">
          <div class="radioBtnBox" v-for="shift in project.shifts" v-bind:key="shift.id" @click="selectedShift(project.id, shift.id)">
            <input type="radio" name="slectShift" id="boxOne">
            <label for="boxOne" class="wall">
              <span class="radioBtnIco"></span>
              <h3>{{shift.name}}</h3>
              <small>Kiezen Voor zekerheid</small>
              <p>{{shift.description}}</p>
            </label>
          </div>
        </div>
        <button class="small" @click="selectedShift(project.id);">Add Shift</button>
      </div>
    </div>
  </div>
</template>

<script>

  import data from '../../config/data';

  export default {
    components: {},
    name: 'ProjectListMenu',
    props: ['projects', 'selectedproject'],
    methods: {
      /**
       * Select the shift and navigate to selected shift
       * @param projectId
       * @param shiftId
       */
      selectedShift (projectId, shiftId = false)  {
        // udpate the project
        this.selectedproject.id = projectId;
        if (shiftId) {
          // redirect to shift
          this.$router.push(`/setup/selectedShift/${projectId}/${shiftId}`);
        }
        else {
          // redirect to shift
          this.$router.push(`/setup/floorManagersList`);
        }
      }
    }
  }
</script>
