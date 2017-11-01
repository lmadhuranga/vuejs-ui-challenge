<template id="navigator">
  <div class="accordionHeader">
    <router-link :to="{ path: this.path}"><span> < </span> {{msg}}  </router-link>
  </div>
</template>

<script>
  export default {
    components: {},
    props:['msg', 'path'],
    name: 'Navigator',
    mounted(){
        console.log('mad_msg__ this.msg', this.msg)
    }
  }
</script>
