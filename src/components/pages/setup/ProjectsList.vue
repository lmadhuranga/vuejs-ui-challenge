<style scoped>
  .panelSmall {
    position: fixed;
    top: 0;
    background: #fff;
    max-width: 400px;
    height: 100vh;
    right: 0;
  }

  .panelSmall.active:after {
    display: block;
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(15, 4, 35, 0.63);
    right: 400px;
    top: 0;
    z-index: -15;
  }

  .panelSmall .radioBtnBoxWrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .panelSmall .radioBtnBox {
    max-width: calc(50% - 10px);
  }

  .panelSmall .radioBtnBox .wall {
    height: 100%;
    padding: 5px;
    background: #efefef;
    display: block;
    cursor: pointer;
  }

  .panelSmall .radioBtnBox [name="slectShift"]:checked + .wall {
    background: #7664cc;
  }

  .panelSmall .accordionBody {
    padding: 20px;
    display: none;
  }

  .panelSmall .accordionBody.active {
    display: block;
  }

  .panelSmall .accordionHeader {
    padding: 20px;
  }

  .panelSmall .panelClose {
    position: absolute;
    margin-left: -46px;
    margin-top: 15px;
    padding: 7px 10px;
    background: #fff;
    border-radius: 100%;
  }

  [name="slectShift"] {
    width: 0;
    height: 0;
    position: absolute;
    visibility: hidden;
  }

  .helpText {
    margin-top: 20px;
    display: inline-block;
  }
</style>

<template>
  <div id="projectList">
    <!-- s panel small -->
    <div class="wall panelSmall active" style="display: block">

      <a class="panelClose">X</a>

      <!-- s accordion wrap -->
      <div class="accordionWrap">
        <div class="accordion">
          <div class="accordionHeader"> Adviesprijs <span></span></div>
          <div class="accordionBody"></div>
        </div>

        <div class="accordion">
          <div class="accordionHeader"> Prijsstelling <span></span></div>
          <div class="accordionBody active">
            <form class="radioBtnBoxWrap">
              <div class="radioBtnBox">
                <input type="radio" name="slectShift" id="boxOne">
                <label for="boxOne" class="wall">
                  <span class="radioBtnIco"></span>
                  <h3>Dynamisch</h3>
                  <small>Kiezen Voor zekerheid</small>
                  <p>De prijs past zich aan de vraag aan, maar blijft altijd tussen 80 en 120 procent
                    van de door jou gekozen prijs uurprijs.</p>
                </label>
              </div>

              <div class="radioBtnBox">
                <input type="radio" name="slectShift" id="boxTwo" checked>
                <label for="boxTwo" class="wall">
                  <span class="radioBtnIco"></span>
                  <h3>Vast</h3>
                  <small>Kiezen voor controle</small>
                  <p>De uurprijs staat vast, zodat je nooit meer betaalt dan vooraf aangegeven. </p>
                </label>
              </div>

            </form>

            <span class="helpText">Wij helpen je kiezen: <a href="#">hoe wil je je prijs instellen?</a> </span>
          </div>
        </div>

        <div class="accordion">
          <div class="accordionHeader"> Flex of FlexVast <span></span></div>
          <div class="accordionBody"></div>
        </div>

        <div class="accordion">
          <div class="accordionHeader"> Contactpersoon <span></span></div>
          <div class="accordionBody"></div>
        </div>

        <div class="accordion">
          <div class="accordionHeader"> Extra opties <span></span></div>
          <div class="accordionBody"></div>
        </div>
      </div>
      <!-- e accordion wrap -->
      <div class="panelFooter">
        <img src="panelFooter.jpg"/>
      </div>
    </div>
    <!-- e panel small -->
  </div>
  <!-- e #projectList-->
</template>

<script>
  import ProjectListMenu from "../../template/ProjectListMenu";

  export default {
    components: {
      ProjectListMenu
    },
    name: 'ProjectList',
    props: ['users', 'projects', 'selectedproject']

  }
</script>
