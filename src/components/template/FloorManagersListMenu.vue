<template>
    <v-container>
        <v-list>
            <v-list-group :value="true"  >
                <!--List the project's shift list-->
                <v-list-tile v-for="floorManager in floorManagers" v-bind:key="floorManager.id" @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>
                          <router-link :to="{ path: `/setup/userView/${floorManager.id}`}">{{floorManager.name}}</router-link>
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
        name: 'FloorManagersListMenu',
        props: ['floorManagers'],
    }
</script>
