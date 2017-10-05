<template id="people-listing-template">
  <ul>
    <li v-for="person in people">
      {{ person.name }}
      <router-link :to="{ name: 'person', params: { id: person.id }}">{{ person.name }}</router-link>
    </li>
    <li><router-link :to="{ name: 'add'}">Add User</router-link></li>
  </ul>
</template>
<script>
  export default {
    name: 'PeopleListing',
    props: ['people']
  }
</script>