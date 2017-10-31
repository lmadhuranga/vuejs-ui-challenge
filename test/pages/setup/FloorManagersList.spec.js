import Vue from 'Vue';
import FloorManagersList from '../../../src/components/pages/setup/FloorManagersList.vue'
import router from '../../../src/router'
import data from '../../../src/config/data'
import {shallow, mount} from "vue-test-utils"
import VueRouter from 'vue-router';

describe('FloorManagersList.vue', () => {
  Vue.use(VueRouter);
  let cmp, users;

  const createCmp = propsData => mount(FloorManagersList, {
    propsData,
    el: document.createElement('div'),
    router: router,
    render: h => h('router-view')
  });

  beforeEach(() => {
    users = data.users;
    cmp = createCmp({
      users: users
    });
  });

  it('should be able load floorManagers', () => {
    expect(cmp.vm.users).toEqual(users);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  });
});
