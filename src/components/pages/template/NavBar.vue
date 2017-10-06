<template>
    <v-toolbar
            absolute
            class="white teal lighten-3"
            dark
            scroll-off-screen
            scroll-target="#scrolling-techniques"
    >
        <v-btn v-if="isNew!=true" icon class="hidden-xs-only" @click="toAdd()">
            <v-icon>person_outline</v-icon>
        </v-btn>
        <v-btn v-if="isNew" icon class="hidden-xs-only btn-arrow-back" @click="toHome()">
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>{{this.title}}</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>
<script>
    export default {
        name: 'NavBar',
        props: ['isNew', 'title']
    }
</script>