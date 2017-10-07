<template>
    <div id="app">
        <router-view :users="users"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                users: [{
                    id: 1, name: 'madhuranga',
                    about: 'hi',
                    email: 'my@gmail.com'
                }]
            }

        }
    }
</script>
 