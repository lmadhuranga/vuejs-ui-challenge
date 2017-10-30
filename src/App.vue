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
        users: [
          {
            id: 1, name: 'Madhuranga Sendheera',
            about: 'about me',
            email: 'my@gmail.com'
          },
          {
            id: 1, name: 'Randika Senadheera',
            about: 'about me',
            email: 'my@gmail.com'
          },
        ],
        projects: [
          {
            id: 1,
            name: 'Project 1',
            shifts: [
              {
                id: 1,
                name: 'shift1'
              },
              {
                id: 2,
                name: 'shift2'
              }
            ]
          },
          {
            id: 2,
            name: 'Project 2',
            shifts: [
              {
                id: 1,
                name: 'shift1'
              },
              {
                id: 2,
                name: 'shift2'
              },
              {
                id: 3,
                name: 'shift2'
              }
            ]
          }
        ]
      }

    }
  }
</script>
