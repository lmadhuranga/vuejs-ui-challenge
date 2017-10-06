<template id="personDetails">
    <v-app toolbar--fixed toolbar style="overflow: hidden">
        <nav-bar :title="user.name" :isNew="true"></nav-bar>
        <main
                style="max-height: 600px;"
                class="scroll-y"
                id="scrolling-techniques"
        >
            <v-container>
                <h3>{{ user.name }}</h3>
                <h4>Email</h4>
                <p>{{ user.email }}</p>
                <h4>About</h4>
                <p>{{ user.about }}</p>
            </v-container>
        </main>
    </v-app>
</template>
<script>

    import NavBar from "./template/NavBar.vue";

    export default {
        components: {
            NavBar,
        },
        name: 'userDetail',
        props: ['people'],
        data: function () {
            var route = this.$route;
            return {
                user: this.people.filter(function (user) {
                    return user.id == route.params.id;
                })[0]
            };
        }
    }
</script>