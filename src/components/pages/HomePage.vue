<template>
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <!--<nav-bar title="Home Page" :isNew="false"></nav-bar>-->
    <main
      style="max-height: 600px;"
      class="scroll-y"
      id="scrolling-techniques"
    >
      <h1>Home page</h1>

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
        <router-link :to="{ path: 'setup/projectsList'}">Select Floor Manager</router-link>
      </v-form>
    </main>
  </v-app>
</template>

<script>
  import UserList from "../user/UsersList.vue";
  import SideMenu from "../template/SideBar.vue";
  import NavBar from "../template/NavBar.vue";

  export default {
    components: {
      NavBar,
      SideMenu,
      UserList,
    },
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



  }
</script>
