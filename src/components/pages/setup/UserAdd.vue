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
    padding: 9px 10px 7px;
    background: #fff;
    border-radius: 100%;
    color: #444;
    text-decoration: none;
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
              <h2>Manager Register</h2>
              <form v-on:submit.prevent="addUser(user)" lazy-validation>

                <div class="field">
                  <label for="fulName">Full Name</label>
                  <input id="fulName" type="text" placeholder="Full Name" v-model="user.name"
                         maxlength="20" required="required">
                </div>

                <div class="field">
                  <label for="E-mail">E-mail</label>
                  <input id="E-mail" type="email" placeholder="E-mail" v-model="user.email"
                         maxlength="50" required="required">
                </div>

                <div class="field">
                  <label for="Address">Address</label>
                  <textarea id="Address" cols="30" rows="4" placeholder="Address" v-model="user.address"></textarea>
                </div>

                <div class="field">
                  <label for="PostPode">Post Code</label>
                  <input id="PostPode" type="text" placeholder="Post Code" v-model="user.postCode">
                </div>

                <div class="field">
                  <label for="BTWNumber">BTW Number</label>
                  <input id="BTWNumber" type="number" placeholder="BTW Number" v-model="user.btwNumber"></input>
                </div>

                <div class="field">
                  <label for="KvkNumber">Kvk Number</label>
                  <input id="KvkNumber" type="number" placeholder="Kvk Number" v-model="user.kvkNumber">
                </div>

                <div class="field">
                  <button>Plaats Shift </button>
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
      user: {},
      currentRoute: 'userAdd',
    }),
    methods: {
      /**
       * Add user to main users array
       * @param newUser
       */
      addUser (newUser) {
        newUser.id = uuid.v4();
        this.users.push(newUser);
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


