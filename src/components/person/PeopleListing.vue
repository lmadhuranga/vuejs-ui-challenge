<template id="peopleListing">
    <span>
        <v-list-tile v-for="person in people" v-bind:key="person.name" @click="">
            <person :person="person"></person>
        </v-list-tile>
    </span>
</template>
<script>
    import Person from "./Person.vue";

    export default {
        components: {Person},
        name: 'PeopleListing',
        props: ['people']
    }
</script>