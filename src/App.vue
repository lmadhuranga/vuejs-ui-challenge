<template>
  <div id="app">
    <router-view :people="people"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () { 
      return  {
        people: [ ]
      }
        
    }
}
</script>
 