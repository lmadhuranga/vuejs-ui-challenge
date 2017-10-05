<template id="people-listing-template">
  <ul>
    <li v-for="person in people">
      {{ person.name }} 
    </li>
  </ul>
  
</template>

<script>
  export default { 
    data () { 
      return  {
         people : [{name:'home page'}]
      }
        
    }
  }
</script>