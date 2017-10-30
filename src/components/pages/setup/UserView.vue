<template id="personDetails">
    <v-app toolbar--fixed toolbar style="overflow: hidden">
        <nav-bar :title="user.name" :isNew="true"></nav-bar>
        <main
                style="max-height: 600px;"
                class="scroll-y"
                id="scrolling-techniques"
        >
            <v-container>
                <h4>{{ user.name }}</h4>
                <b>Email</b>
                <p>{{ user.email }}</p>
                <b>About</b>
                <p>{{ user.about }}</p>
            </v-container>
        </main>
    </v-app>
</template>
<script>

    import NavBar from "../../template/NavBar.vue";

    export default {
        components: {
        },
        name: 'userView',
        props: ['users'],
        data() {
            let route = this.$route;
            return {
                user: this.users.filter((user) => {
                    return user.id == route.params.id;
                })[0]
            };
        }
    }
</script>
