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
  <div id="userAdd" class="panelMedium active">
    <a class="panelClose">X</a>
    <div class="accordion">
      <div class="accordionHeader"><span> < </span> Nieuwe Opdrachtgever <span></span></div>
      <div class="accordionBody active">
        <div class="tabHeaderCollection">
          <a href="#Zoeken" class="tabHeader active">Zoeken</a>
          <a href="#Algemeen" class="tabHeader">Algemeen</a>
          <a href="#Facturatie" class="tabHeader">Facturatie</a>
          <a href="#Facturatie" class="tabHeader">Gebruikers</a>
        </div>
        <div class="tabBodyCollection">

          <!-- s tab Zoeken -->
          <div class="tabBody active">
            <div class="wall">
              <h2>Floor Manager Register</h2>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  label="Full Name"
                  v-model="user.name"
                  :rules="nameRules"
                  :counter="10"
                  required
                ></v-text-field>

                <v-text-field
                  label="E-mail"
                  v-model="user.email"
                  :rules="emailRules"
                  required
                ></v-text-field>

                <v-text-field
                  label="Address"
                  v-model="user.address"
                  multi-line
                ></v-text-field>

                <v-text-field
                  label="Post Code"
                  v-model="user.postCode"
                ></v-text-field>

                <v-text-field
                  label="BTW Number"
                  v-model="user.btwNumber"
                ></v-text-field>

                <v-text-field
                  label="Kvk Number"
                  v-model="user.kvkNumber"
                ></v-text-field>

                <button
                  @click="addUser(user)"
                  :disabled="!valid"
                >Plaats Shift
                </button>
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
  import uuid from 'uuid';

  export default {
    components: {},
    props: ['users'],
    data: () => ({
      valid: true,
      user: {name: '', email: ''},
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
    }),
    methods: {

      addUser (newUser) {
        newUser.id = uuid.v4();
        this.users.push(newUser);
        this.user = {name: ''};
        this.goToNext(newUser.id);
      },
      goToNext (userId) {
        this.$router.push(`/setup/shiftAdd/${userId}`);
      },
    }
  }
</script>


