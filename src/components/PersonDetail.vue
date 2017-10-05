<template>
    <v-app toolbar--fixed toolbar style="overflow: hidden">
        <v-toolbar
                absolute
                class="white teal lighten-3"
                dark
                scroll-off-screen
                scroll-target="#scrolling-techniques"
        >
            <v-btn icon class="hidden-xs-only" @click="toHome()">
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>{{ user.name }}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <main
                style="max-height: 600px;"
                class="scroll-y"
                id="scrolling-techniques"
        >
            <v-container>
                <h1>{{ user.name }}</h1>
                <h4>Email</h4>
                <p>{{ user.email }}</p>
                <h4>About</h4>
                <p>{{ user.about }}</p>
            </v-container>
        </main>
    </v-app>
</template>
<script>
    export default {
        name: 'userDetail',
        props: ['people'],
        data: function () {
            var route = this.$route;
            return {
                user: this.people.filter(function (user) {
                    return user.id == route.params.id;
                })[0]
            };
        },
        methods: {
            toHome: function () {
                this.$router.push('/');
            },
        }
    }
</script>