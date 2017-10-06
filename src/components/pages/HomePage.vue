<template>
    <v-app toolbar--fixed toolbar style="overflow: hidden">
        <nav-bar title="Home Page" isNew="false"></nav-bar>
        <main
                style="max-height: 600px;"
                class="scroll-y"
                id="scrolling-techniques"
        >
            <side-menu :people="people"></side-menu>
        </main>
    </v-app>
</template>

<script>
    import PeopleListing from "../person/PeopleListing.vue";
    import SideMenu from "./template/SideBar.vue";
    import NavBar from "./template/NavBar.vue";

    export default {
        components: {
            NavBar,
            SideMenu,
            PeopleListing,
        },
        props: ['people'],
        methods: {
            toAdd: function () {
                this.$router.push('/add');
            },
        }
    }
</script>