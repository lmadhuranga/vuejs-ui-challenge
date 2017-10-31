import Vue from 'Vue';
import ProjectsList from '../../../src/components/pages/setup/ProjectsList.vue'
import router from '../../../src/router'
import data from '../../../src/config/data'
import {shallow, mount} from "vue-test-utils"
import VueRouter from 'vue-router';

describe('ProjectsList.vue', () => {
  Vue.use(VueRouter);
  let cmp, users, projects, project, projectId;

  const createCmp = propsData => shallow(ProjectsList, {
    propsData,
    el: document.createElement('div'),
    router: router,
    render: h => h('router-view')
  });

  beforeEach(() => {
    users = data.users;
    projects = data.projects;
    project = projects[0];
    projectId = projects[0];
    cmp = createCmp({
      users: users,
      projects: projects,
      selectedproject:projectId
    });
  });

  it('should be able load projects', () => {
    expect(cmp.vm.projects).toEqual(projects);
  });

  it('should be able load projects', () => {
    expect(cmp.vm.users).toEqual(users);
  });

  it('should be able load projects', () => {
    expect(cmp.vm.selectedproject).toEqual(projectId);
  });

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  });
});
