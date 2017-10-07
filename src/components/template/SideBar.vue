<template>
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
                <users-list :users="users"></users-list>
            </v-list-group>

            <v-list-group :value="false" v-bind:key="0">
                <v-list-tile slot="item" @click="">
                    <v-list-tile-action>
                        <v-icon>person_outline</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Other Menu</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-icon>keyboard_arrow_down</v-icon>
                    </v-list-tile-action>
                </v-list-tile>

                <v-list-tile v-bind:key="10000" @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Other Item
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
        name: 'SideMenu',
        props: ['users'],
    }
</script>