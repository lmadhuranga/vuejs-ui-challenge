<template id="person">
   <span>
       <v-list-tile-content>
            <v-list-tile-title>
                <router-link :to="{
                    name: 'person',
                    params: { id: person.id }}">
                    {{ person.name }}
                </router-link>
            </v-list-tile-title>
       </v-list-tile-content>
   </span>
</template>
<script>
    export default {
        name: 'person',
        props: ['person']
    }
</script>