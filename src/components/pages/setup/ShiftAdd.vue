<template id="userAdd">
  <v-container>
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
        Add User
      </v-btn>
    </v-form>
  </v-container>
</template>


<script>

  import uuid from 'uuid'

  export default {
    components: {},
    name: 'ShiftAdd',
    props: ['users', 'projects', 'selectedproject'],
    data: () => ({
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
        this.toHome(this.selectedproject.id, newShift.id);
      },
      toHome (projectId, newShiftId) {
        this.$router.push(`/setup/selectedShift/${projectId}/${newShiftId}`);
      },
    }
  }
</script>


