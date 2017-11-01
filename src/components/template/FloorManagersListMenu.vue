<style scoped>
.list a{
  color: #444;
}
.list small{
  font-size: 13px;
  color: #888;
}
.list{
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
a{
  text-decoration: none;
}
  .field a{
    width: 100%;
    background: #52af52;
    border: 0;
    padding: 12px;
    color: #FFF;
    font-size: 14px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin-top: 30px;
  }
  .listWrap{
    padding: 20px;
    max-width: 360px;
  }

  .search{
    line-height: 35px;
    width: 100%;
  }
</style>
<template id="floorManagersListMenu">
  <div class="listWrap">
    <input class="search" type="text" v-model="search" placeholder="Search Manager"/>
    <ul>

      <li v-for="floorManager in filteredFloorManagers"  class="list">
        <p>
          <router-link v-bind:key="floorManager.id" :to="{ path: `/setup/shiftAdd/${floorManager.id}`}">
            {{floorManager.name}}
            <div><small>Stationsweg 1, Breukelen</small></div>
          </router-link>
        </p>

      </li>
    </ul>
    <div class="field">
      <router-link :to="{ path: `/setup/userAdd`}">Add Project Manager</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data(){
      return {
        search: ''
      }
    },
    name: 'FloorManagersListMenu',
    props: ['floorManagers'],
    computed: {
      /**
       * Filter the floor manger from main floor manager array
       * @returns {*[]|Array.<*>}
       */
      filteredFloorManagers() {
        return this.floorManagers.filter(floorManager => {
          return floorManager.name.indexOf(this.search.toLowerCase()) > -1
        })
      }
    }
  }
</script>
