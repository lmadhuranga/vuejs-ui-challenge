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
    <router-link class="tabHeader" :class="{ active: this.floorManagersList}" :to="{ path: this.getSetupUrl('floorManagersList')}">Select Floor Manager</router-link>
    <router-link class="tabHeader" :class="{ active: this.userAdd}" :to="{ path: this.getSetupUrl('userAdd')}">Add Manager</router-link>
    <router-link class="tabHeader" :class="{ active: this.shiftAdd}" :to="{ path: this.getSetupUrl('shiftAdd')}">Add Shift</router-link>
  </div>
</template>

<script>
  export default {
    components: {},
    props:['currentRoute'],
    name: 'TabHeaderCollection',
    methods:{
      /**
       * Get full nested url
       */
      getSetupUrl(url){
        return `/setup/${url}`;
      }
    },
    /**
     * Values set to correct header
     */
    computed: {
      floorManagersList(){
        return this.currentRoute==='floorManagersList';
      },
      userAdd(){
        return this.currentRoute==='userAdd';
      },
      shiftAdd(){
        return this.currentRoute==='shiftAdd';
      }
    }
  }
</script>
