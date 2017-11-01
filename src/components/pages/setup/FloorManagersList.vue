<style scoped>
  .panelMedium {
    position: fixed;
    top: 0;
    background: #fff;
    max-width: 600px;
    height: 100vh;
    right: 0;
    width: 100%;
  }

  .panelMedium.active:after {
    display: block;
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(15, 4, 35, 0.63);
    right: 600px;
    top: 0;
    z-index: -15;
  }

  .panelMedium .accordionBody {
    /*padding: 20px;*/
    display: none;
  }

  .panelMedium .accordionBody.active {
    display: block;
  }

  .panelMedium .accordionHeader {
    padding: 20px;
  }

  .panelMedium .panelClose {
    position: absolute;
    margin-left: -46px;
    margin-top: 15px;
    padding: 9px 10px 7px;
    background: #fff;
    border-radius: 100%;
    color: #444;
    text-decoration: none;
  }

  .panelMedium .tabHeaderCollection a {
    color: #9E9E9E;
    text-decoration: none;
    padding-bottom: 10px;
    border-bottom: 2px solid;
    width: 100%;
    text-align: center;
  }

  .panelMedium .tabHeaderCollection a.active {
    color: #7c2bad;
  }

  .panelMedium .tabHeaderCollection {
    display: flex;
    justify-content: space-evenly;
  }

  .panelMedium .helpText {
    margin-top: 20px;
    display: inline-block;
  }

  .panelMedium h2{
    padding:30px 20px 10px;
    font-size: 22px;
  }
</style>
<template>
  <div id="floorManagersList" class="panelMedium active">
    <go-to-home></go-to-home>
    <div class="accordion">
      <navigator msg="Go To Home" path="/setup/"></navigator>
      <div class="accordionBody active">
        <tab-header-collection :currentRoute="currentRoute"></tab-header-collection>
        <div class="tabBodyCollection">

          <!-- s tab Zoeken -->
          <div class="tabBody active">
            <div class="wall">
              <h2>Floor Managers</h2>
              <floor-managers-list-menu :floorManagers="users"></floor-managers-list-menu>
            </div>
          </div>
          <!-- e tab Zoeken -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import FloorManagersListMenu from "../../template/FloorManagersListMenu";
  import TabHeaderCollection from "../../template/TabHeaderCollection";
  import Navigator from "../../template/Navigator";
  import GoToHome from "../../template/GotoHome";

  export default {
    components: {
      GoToHome,
      Navigator,
      TabHeaderCollection,
      FloorManagersListMenu,
    },
    name:'floorManagersList',
    props: ['users'],
    data(){
        return {
          currentRoute:'floorManagersList',
        }
    }

  }
</script>
