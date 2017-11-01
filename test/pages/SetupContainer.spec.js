import Vue from 'vue'
import SetupContainer from '../../src/components/pages/SetupContainer.vue'
import router from '../../src/router/index'
import data from '../../src/config/data'
import {shallow, mount} from "vue-test-utils"


describe("SetupContainer", () => {

  let cmp, users, projects, project, projectId;
  const createCmp = propsData => mount(SetupContainer, {propsData, router: router})

  beforeEach(() => {
    users = data.users;
    projects = data.projects;
    project = projects[0]
    projectId = projects[0]

    cmp = createCmp({
      users: users,
      projects: projects,
      selectedproject: projectId,
      config: {isSidePanelOpen: true}
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


  it('Should be load page users', () => {
    expect(cmp.vm.users).toEqual(users)
  });
});
