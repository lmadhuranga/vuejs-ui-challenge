<style scoped>
  .mainScreen {
    margin-left: 10%;
    margin-top: 10%;
  }

  .mainScreen h1 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 40px;
  }

  .mainScreen h3 {
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .mainScreen .field {
    padding: 10px;
  }

  .mainScreen .wall {
    background: #fff;
    max-width: 240px;
  }
</style>

<template>
  <div class="mainScreen">
    <h1>Ervaren Freelancers <strong>On-Demand.</strong></h1>
    <h3>shift bij Loetje aan de Amstel +</h3>
    <!-- s wall -->
    <div class="wall">
      <form onsubmit="formSubmit()">
        <div class="field">
          <label for="projectList">Project</label>
          <select id="projectList">
            <option>Select Project</option>
            <option v-for="project in projects" v-bind:key="project.id">{{project.name}}</option>
          </select>
        </div>
        <hr>
        <div class="field">
          <input type="checkbx" name="rememberMe" id="rememberMe">
          <label for="rememberMe">Maak nog een shift</label>
        </div>
        <div class="field">
          <button @click="formSubmit(event)">Plaats Shift</button>
        </div>
      </form>
    </div>
    <!-- e wall -->
  </div>
  <!-- e end mainScreen -->
</template>

<script>
  export default {
    props: ['users', 'config', 'projects'],
    methods: {
      formSubmit(){
        this.$router.push(`/setup/projectList`);
      }
    },
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
