<template id="navigator">
  <div class="accordionHeader">
    <router-link :to="{ path: this.path}"><span> < </span> {{msg}}  </router-link>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'Navigator',
    props:['msg', 'path'],
  }
</script>
