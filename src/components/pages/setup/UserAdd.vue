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

  .panelMedium .panelClose {
    position: absolute;
    margin-left: -46px;
    margin-top: 15px;
    padding: 7px 10px;
    background: #fff;
    border-radius: 100%;
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
  h2{
    font-size: 22px;
    padding:30px 20px 10px;
  }
</style>
<template>
  <div id="userAdd" class="panelMedium active">
    <go-to-home></go-to-home>
    <div class="accordion">
      <navigator msg="Go To Floor Managers" path="/setup/floorManagersList"></navigator>
      <div class="accordionBody active">
        <tab-header-collection :currentRoute="currentRoute"></tab-header-collection>

        <div class="tabBodyCollection">
          <!-- s tab Zoeken -->
          <div class="tabBody active">
            <div class="wall">
              <h2>Floor Manager Register</h2>
              <form v-model="valid" ref="form" lazy-validation>

                <div class="field">
                  <label for="fulName">Full Name</label>
                  <input id="fulName" type="text" placeholder="Full Name" v-model="user.name" :rules="nameRules" :counter="10" required>
                </div>

                <div class="field">
                  <label for="E-mail">E-mail</label>
                  <input id="E-mail" type="text" placeholder="E-mail" v-model="user.email" :rules="emailRules" :counter="10" required>
                </div>

                <div class="field">
                  <label for="Address">Address</label>
                  <textarea  id="Address" cols="30" rows="4" placeholder="Address" v-model="user.address"></textarea>
                </div>

                <div class="field">
                  <label for="PostPode">Post Code</label>
                  <input id="PostPode" type="text" placeholder="Post Code" v-model="user.postCode">
                </div>

                <div class="field">
                  <label for="BTWNumber">BTW Number</label>
                  <input  id="BTWNumber" type="text" placeholder="Address" v-model="user.btwNumber"></input>
                </div>

                <div class="field">
                  <label for="KvkNumber">Kvk Number</label>
                  <input id="KvkNumber" type="text" placeholder="Kvk Number" v-model="user.kvkNumber">
                </div>



                <div class="field">
                  <button @click="addUser(user)" :disabled="!valid" >Plaats Shift </button>
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
  import uuid from 'uuid';
  import TabHeaderCollection from "../../template/TabHeaderCollection";
  import Navigator from "../../template/Navigator";
  import GoToHome from "../../template/GotoHome";

  export default {
    components: {
      GoToHome,
      Navigator,
      TabHeaderCollection
    },
    props: ['users'],
    data: () => ({
      currentRoute: 'userAdd',
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
      /**
       * Add user to main users array
       * @param newUser
       */
      addUser (newUser) {
        newUser.id = uuid.v4();
        this.users.push(newUser);
        this.user = {name: ''};
        this.goToNext(newUser.id);
      },
      /**
       * Navigate to next page
       * @param userId
       */
      goToNext (userId) {
        this.$router.push(`/setup/shiftAdd/${userId}`);
      },
    }
  }
</script>


