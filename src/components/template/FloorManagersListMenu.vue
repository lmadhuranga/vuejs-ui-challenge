<template id="floorManagersListMenu">
  <v-container>
    <v-list>
      <v-list-group :value="true">
        <!-- Add new project manager-->
        <v-list-tile v-bind:key="1000000" @click="">
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="{ path: `/setup/userAdd`}">Add Project Manager</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile v-bind:key="2000000" @click="">
          <v-list-tile-content>
            <v-list-tile-title>
              <input type="text" placeholder="Search Floor Manager" v-model="search">
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <!--List the project's shift list-->
        <v-list-tile v-for="floorManager in filteredFloorManagers" v-bind:key="floorManager.id" @click="">
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="{ path: `/setup/shiftAdd/${floorManager.id}`}">{{floorManager.name}}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>school</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>

    </v-list>
  </v-container>
</template>

<script>
  export default {
    components: {},
    name: 'FloorManagersListMenu',
    props: ['floorManagers'],
    computed: {
      filteredFloorManagers() {
        return this.floorManagers.filter(floorManager => {
          return floorManager.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        })
      }
    }
  }
</script>
