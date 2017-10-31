import Vue from 'Vue';
import FloorManagersListMenu from '../../src/components/template/FloorManagersListMenu.vue'
import router from '../../src/router'
import data from '../../src/config/data'
import {shallow, mount} from "vue-test-utils"
import VueRouter from 'vue-router';

describe('FloorMangersListMenu.vue', () => {
  Vue.use(VueRouter);
  let cmp, floorManager;

  const createCmp = propsData => shallow(FloorManagersListMenu, {
    propsData,
    el: document.createElement('div'),
    router: router,
    render: h => h('router-view')
  });

  beforeEach(() => {
    floorManager = data.users[0];

    cmp = createCmp({
      floorManagers: [floorManager]
    });
  });

  it('should be able load floorManagers', () => {
    expect(cmp.vm.floorManagers[0]).toEqual(floorManager);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  });
});
