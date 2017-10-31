<template>
    <v-container>
        <v-list>
            <v-list-group :value="false" v-for="project in projects" v-bind:key="project.id" >
                <!-- Header element-->
                <v-list-tile slot="item" @click="" >
                    <v-list-tile-action>
                        <v-icon>person_outline</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{project.name}}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-icon>keyboard_arrow_down</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

                <!--New Shift-->
                <v-list-tile v-bind:key="10000" @click="selectedShift(project.id)">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Add Shift
                    </v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-icon>add</v-icon>
                  </v-list-tile-action>
                </v-list-tile>

                <!--List the project's shift list-->
                <v-list-tile v-for="shift in project.shifts" v-bind:key="shift.id"  @click="selectedShift(project.id, shift.id)">
                    <v-list-tile-content>
                        <v-list-tile-title>
                          {{shift.name}}
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

    import UsersList from "../user/UsersList.vue";

    export default {
        components: {UsersList},
        name: 'ProjectListMenu',
        props: ['projects', 'selectedproject'],
        methods: {

          selectedShift (projectId, shiftId=false)  {
              // udpate the project
             this.selectedproject.id= projectId;
            if(shiftId)
            {
              // redirect to shift
              this.$router.push(`/setup/selectedShift/${projectId}/${shiftId}`);
            }
            else{
              // redirect to shift
              this.$router.push(`/setup/floorManagersList`);
            }
          },
        }
    }
</script>
