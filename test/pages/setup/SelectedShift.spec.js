import Vue from 'Vue';
import SelectedShift from '../../../src/components/pages/setup/SelectedShift.vue'
import router from '../../../src/router'
import data from '../../../src/config/data'
import {shallow, mount} from "vue-test-utils"
import VueRouter from 'vue-router'
import lodash from 'lodash';


describe('SelectedShift.vue', () => {
  Vue.use(VueRouter);
  let cmp, user, shift, projectId, userId, shiftId, shiftIndex, project;

  const createCmp = propsData => shallow(SelectedShift, {
    propsData,
    el: document.createElement('div'),
    router: router,
    render: h => h('router-view')
  });

  beforeEach(() => {
    projectId = 1;
    shiftIndex = 1;
    shift = data.projects[projectId].shifts[0];
    shiftId = shift.id;
    user = data.users[0];
    project = data.projects[projectId];

    cmp = createCmp({
      users: data.users,
      projects: {1: project}
    });

    router.push({
      name: 'selectedShift',
      params: {projectId: projectId, shiftId: shiftId, userId: user.id}
    });
  });

  it('should be able load shift', () => {
    expect(cmp.vm.projects[projectId].shifts[0]).toEqual(shift);
  });

  it('should be able load project', () => {
    expect(cmp.vm.projects[projectId]).toEqual(project);
  });

  it('should be able load floorManager', () => {
    expect(cmp.vm.floorManager).toEqual(user);
  });


});
