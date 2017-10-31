<template id="user">
   <span>
       <v-list-tile-content>
            <v-list-tile-title>
                <b>{{ user.name }}</b> - {{user.email}}
                <router-link :to="{
                    name: 'userView',
                    params: { id: user.id }}">
                    View
                </router-link>
            </v-list-tile-title>
       </v-list-tile-content>
   </span>
</template>
<script>
  export default {
    name: 'user',
    props: ['user']
  }
</script>
