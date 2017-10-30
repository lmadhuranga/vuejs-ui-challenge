<template>
    <div id="app">
        <router-view :users="users" :projects="projects"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                users: [{
                    id: 1, name: 'madhuranga',
                    about: 'about me',
                    email: 'my@gmail.com'
                }],
                projects:[
                  {
                      id:1,
                      name:'Project 1',
                      shift:[
                        {
                            id:1,
                            name:'shift1'
                        },
                        {
                          id:2,
                          name:'shift2'
                        }
                      ]
                  }
                ]
            }

        }
    }
</script>
