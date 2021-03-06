import Vue from 'Vue';
import SelectedShift from '../../src/components/template/ProjectListMenu.vue'
import router from '../../src/router'
import data from '../../src/config/data'
import {shallow, mount} from "vue-test-utils"
import VueRouter from 'vue-router';

describe('ProjectListMenu.vue', () => {
  Vue.use(VueRouter);
  let cmp, user, shift, projectId, shiftId, shiftIndex, project;

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
    project = data.projects[projectId];

    cmp = createCmp({
      projects: {1: project},
      selectedproject: {id: projectId}
    });
  });

  it('should be able load projects and selectedProject', () => {
    expect(cmp.vm.selectedproject.id).toEqual(projectId);
    expect(cmp.vm.projects[1]).toEqual(project);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  });

});
