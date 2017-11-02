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
    padding: 9px 10px 7px;
    background: #fff;
    border-radius: 100%;
    color: #444;
    text-decoration: none;
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

  .field {
    padding: 10px 20px;
    max-width: 360px;
  }

  .field input, .field textarea {
    padding: 6px;
    line-height: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  .field label {
    color: #888;
    margin-bottom: 5px;
    display: block;
  }

  h2 {
    padding: 30px 20px 10px;
    font-size: 22px;
  }
</style>
<template>
  <div id="userShift" class="panelMedium active">
    <go-to-home></go-to-home>
    <div class="accordion">
      <navigator msg="Go To Add Manager" path="/setup/userAdd"></navigator>
      <div class="accordionBody active">
        <tab-header-collection :currentRoute="currentRoute"></tab-header-collection>
        <div class="tabBodyCollection">

          <!-- s tab Zoeken -->
          <div class="tabBody active">
            <div class="wall">
              <header>
                <h2>Shift Add</h2>
              </header>
              <form v-on:submit.prevent="addShift(shift)">
                <div class="field">
                  <label for="name">Shift Name</label>
                  <input id="name" type="text" placeholder="Name" v-model="shift.name" required="required">
                </div>

                <div class="field">
                  <label for="idban">IBAN</label>
                  <input id="idban" type="text" placeholder="IBAN" v-model="shift.idban" required="required">
                </div>

                <div class="field">
                  <label for="description">Description</label>
                  <textarea id="description" cols="30" rows="4" placeholder="Description"
                            v-model="shift.description"></textarea>
                </div>

                <div class="field">
                  <button>Add Shift</button>
                </div>

              </form>
            </div>
          </div>
          <!-- e tab Zoeken -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  import uuid from 'uuid'
  import TabHeaderCollection from "../../template/TabHeaderCollection";
  import Navigator from "../../template/Navigator";
  import GoToHome from "../../template/GotoHome";

  export default {
    components: {
      GoToHome,
      Navigator,
      TabHeaderCollection
    },
    name: 'ShiftAdd',
    props: ['users', 'projects', 'selectedproject'],
    data: () => ({
      currentRoute: 'shiftAdd',
      shift: {name: '', email: ''},
    }),
    methods: {
      /**
       * Add shif to the project
       * @param newShift
       */
      addShift (newShift) {
        if (!this.selectedproject.id) {
          this.$router.push('/setup/projectsList');
        }

        newShift.id = uuid.v4();
        newShift.userId = this.$route.params.userId;
        if (!this.projects[this.selectedproject.id].shifts || this.projects[this.selectedproject.id].shifts.length == 0) {
          this.projects[this.selectedproject.id].shifts = [];
        }
        this.projects[this.selectedproject.id].shifts.push(newShift);
        this.goToNext(this.selectedproject.id, newShift.id);
      },
      goToNext (projectId, newShiftId) {
        this.$router.push(`/setup/selectedShift/${projectId}/${newShiftId}`);
      },
    }
  }
</script>
