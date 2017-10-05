<template id="people-listing-template">
  <div>
    <router-link to="/">Homepage</router-link>
    <h1>{{title}}</h1>
    <input type="text" placeholder="Name" v-model="user.name"> 
    <input type="text" placeholder="Email" v-model="user.email"> 
    <button v-on:click="addUser(user)" class="tiny radius">Add User</button>
  </div>
</template>

<script>
  
  export default {
    data () { 
      return  {
        user:{
          name:''
        },
        title:'user add view'
      }
    },
    props: ['people'],
    computed: {
           
        },
    methods: {
      //Todo:: bring to computed object
      randNumber: function() {
          return Math.floor(Math.random() * (25 - 1 + 1)) + 1;
      },

      addUser: function (user) {
        user.id = this.randNumber();
        this.people.push(user);
        this.user = {name:''};
        this.$router.push('/');
      }
    }
  }
</script>