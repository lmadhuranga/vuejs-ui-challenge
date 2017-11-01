<style scoped>
.accordionHeader a span{
  margin-right: 20px;

}
.accordionHeader a{
  text-decoration: none;
  color: #333;
}
.accordionHeader {
  padding: 20px;
  background: #efefef;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc;
}
</style>
<template id="navigator">
  <div class="accordionHeader">
    <router-link :to="{ path: this.path}"><span> < </span> {{msg}}</router-link>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'Navigator',
    props:['msg', 'path'],
  }
</script>
