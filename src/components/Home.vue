<template>
  <v-app toolbar--fixed toolbar style="overflow: hidden">
    <v-toolbar
            absolute
            class="white teal lighten-3"
            dark
            scroll-off-screen
            scroll-target="#scrolling-techniques"
    >
      <v-btn icon class="hidden-xs-only" @click="toAdd()">
        <v-icon>person_outline</v-icon>
      </v-btn>
      <v-toolbar-title>Home Page</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <main
            style="max-height: 600px;"
            class="scroll-y"
            id="scrolling-techniques"
    >
      <v-container>
        <v-list>
          <v-list-group :value="true" v-bind:key="0">
            <v-list-tile slot="item" @click="">
              <v-list-tile-action>
                <v-icon>person_outline</v-icon>
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
                <v-list-tile-title>
                  <router-link :to="{ name: 'add'}">Add Person</router-link>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>school</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="person in people" v-bind:key="person.name" @click="">
              <v-list-tile-content>
                <v-list-tile-title>
                  <router-link :to="{ name: 'person', params: { id: person.id }}">{{ person.name }}</router-link>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-flex xs5>
                  <v-card-media
                          src="https://robohash.org/madhuranga"
                          height="125px"
                          contain
                  ></v-card-media>
                </v-flex>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-container>
    </main>
  </v-app>
</template>

<script>
    export default {
        props: ['people'],
        methods: {
            toAdd: function () {
                this.$router.push('/add');
            },
        }
    }
</script>