<template id="userAdd">
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <main
      style="max-height: 600px;"
      class="scroll-y"
      id="scrolling-techniques"
    >
      <v-container>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="Name"
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
            label="About"
            v-model="user.about"
            multi-line
          ></v-text-field>

          <v-btn
            class="btn-add-user"
            @click="addUser(user)"
            :disabled="!valid"
          >
            Add User
          </v-btn>
        </v-form>
      </v-container>
    </main>
  </v-app>
</template>


<script>


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
      randNumber  () {
        return (this.users.length + 1);
      },
      addUser (newUser) {
        newUser.id = this.randNumber();
        this.users.push(newUser);
        this.user = {name: ''};
        this.toHome();
      },
      toHome () {
        this.$router.push('/setup/floorManagersList');
      },
    }
  }
</script>


