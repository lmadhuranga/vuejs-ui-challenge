<template>
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar class="teal white--text" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Topics</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list>
            <v-list-group :value="true" v-bind:key="0">
              <v-list-tile slot="item" @click="">
                <v-list-tile-action>
                  <v-icon>restaurant</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Users</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>

              <v-list-tile v-bind:key="10000" @click="">
                <v-list-tile-content>
                  <v-list-tile-title><router-link :to="{ name: 'add'}">Add Person</router-link></v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>school</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile v-for="person in people" v-bind:key="person.name" @click="">
                <v-list-tile-content>
                  <v-list-tile-title>{{ person.name }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <!--<v-icon>{{ subItem.action }}</v-icon>-->
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
    export default {
        props: ['people']
    }
</script>