<template id="usersListing">
    <span>
        <v-list-tile v-for="user in users" v-bind:key="user.name" @click="">
            <user :user="user"></user>
        </v-list-tile>
    </span>
</template>
<script>
    import User from "./User.vue";

    export default {
        components: {User},
        name: 'usersList',
        props: ['users']
    }
</script>