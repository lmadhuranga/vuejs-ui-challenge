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
  <div id="userShift" class="panelMedium active">
    <a class="panelClose">X</a>
    <div class="accordion">
      <navigator msg="Go To Add Manager" path="/setup/userAdd"></navigator>
      <div class="accordionBody active">
        <tab-header-collection :currentRoute="currentRoute"></tab-header-collection>
        <div class="tabBodyCollection">

          <!-- s tab Zoeken -->
          <div class="tabBody active">
            <div class="wall">
              <h2>Shift Add</h2>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  label="Shift Name"
                  v-model="shift.name"
                  :rules="nameRules"
                  :counter="10"
                  required
                ></v-text-field>
                <v-text-field
                  label="IBAN"
                  v-model="shift.idban"
                  required
                ></v-text-field>
                <v-text-field
                  label="Description"
                  v-model="shift.description"
                  multi-line
                ></v-text-field>

                <v-btn
                  class="btn-add-user"
                  @click="addShift(shift)"
                  :disabled="!valid"
                >
                  Add Shift
                </v-btn>
              </v-form>
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

  export default {
    components: {
      Navigator,
      TabHeaderCollection},
    name: 'ShiftAdd',
    props: ['users', 'projects', 'selectedproject'],
    data: () => ({
      currentRoute:'shiftAdd',
      valid: true,
      shift: {name: '', email: ''},
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
      ],

    }),
    methods: {
      addShift (newShift) {
        if (!this.selectedproject.id) {
          this.$router.push('/setup/projectsList');
        }

        newShift.id = uuid.v4();
        newShift.userId = this.$route.params.userId;
        this.projects[this.selectedproject.id].shifts.push(newShift);
        this.goToNext(this.selectedproject.id, newShift.id);
      },
      goToNext (projectId, newShiftId) {
        this.$router.push(`/setup/selectedShift/${projectId}/${newShiftId}`);
      },
    }
  }
</script>
