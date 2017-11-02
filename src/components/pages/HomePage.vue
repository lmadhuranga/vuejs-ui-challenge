<style scoped>

</style>

<template>

</template>

<script>
  export default {
    props: ['users', 'config', 'projects'],
    mounted(){
      this.$router.push(`/setup`);
    }
  }
</script>
