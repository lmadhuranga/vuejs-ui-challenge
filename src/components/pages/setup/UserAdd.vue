<template id="userAdd">
  <v-container>
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

      <v-btn
        class="btn-add-user"
        @click="addUser(user)"
        :disabled="!valid"
      >
        Add User
      </v-btn>
    </v-form>
  </v-container>
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
//        TODO this.goToNext(newUser.id);
      },
      goToNext (userId) {
        this.$router.push(`/setup/shiftAdd/${userId}`);
      },
    }
  }
</script>


