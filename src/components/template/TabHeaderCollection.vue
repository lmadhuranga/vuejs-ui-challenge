<style scoped>
  .tabHeaderCollection a {
    color: #9E9E9E;
    text-decoration: none;
    padding-bottom: 10px;
    border-bottom: 2px solid;
    width: 100%;
    text-align: center;
  }

  .tabHeaderCollection a.active {
    color: #7c2bad;
  }

  .tabHeaderCollection {
    display: flex;
    justify-content: space-evenly;
  }

</style>
<template>
  <div class="tabHeaderCollection">
    <a href="#Zoeken" class="tabHeader active">Add Manager</a>
    <a href="#Algemeen" class="tabHeader">Algemeen</a>
    <a href="#Facturatie" class="tabHeader">Facturatie</a>
    <a href="#Facturatie" class="tabHeader">Gebruikers</a>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'TabHeaderCollection'
  }
</script>
