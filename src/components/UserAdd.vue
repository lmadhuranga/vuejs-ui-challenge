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
            <v-toolbar-title>Add User</v-toolbar-title>
            <v-spacer></v-spacer>

        </v-toolbar>
        <main
                style="max-height: 600px;"
                class="scroll-y"
                id="scrolling-techniques"
        >
            <v-container>
                <v-form v-model="valid" ref="form" lazy-validation>
                    <v-text-field
                            label="Name"
                            v-model="user.name"
                            :rules="nameRules"
                            :counter="10"
                            required
                    ></v-text-field>
                    <v-text-field
                            label="E-mail"
                            v-model="user.email"
                            :rules="emailRules"
                            required
                    ></v-text-field>

                    <v-btn
                            @click="addUser(user)"
                            :disabled="!valid"
                    >
                        Add User
                    </v-btn>
                    <v-btn @click="clear">clear</v-btn>
                </v-form>
            </v-container>
        </main>
    </v-app>
</template>


<script>

    export default {
        props: ['people'],
        data: () => ({
            valid: true,
            user:{name:'', email:''},
            nameRules: [
                (v) => !!v || 'Name is required',
                (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
        }),
        methods: {
            randNumber: function () {
                return (this.people.length + 1);
            },

            addUser: function (user) {
                user.id = this.randNumber();
                this.people.push(user);
                this.user = {name: ''};
                this.$router.push('/');
            },
            clear () {
                this.$refs.form.reset()
            },
            toHome: function () {
                this.$router.push('/');
            },
        }
//        methods: {
//            //Todo:: bring to computed object
//
//        },

    }
</script>


