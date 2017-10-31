import Vue from 'Vue';
import ShiftAdd from '../../../../../src/components/pages/setup/SelectedShift.vue'
import data from '../../../../../src/config/data'
import {shallow, mount} from "vue-test-utils"
import VueRouter from 'vue-router'


describe('ShiftAdd.vue', () => {
  /*Vue.use(VueRouter);
  let cmp, user, shift, projectId, userId;
  const router = new VueRouter({
    routes: [
      {
        path: '/setup/shiftAdd/:userId',
        name: 'shiftAdd',
        component: ShiftAdd,
        params: 1
      },
    ],
  });
  const createCmp = propsData => shallow(ShiftAdd, {
    propsData,
    el: document.createElement('div'),
    router: router,
    render: h => h('router-view')
  });

  beforeEach(() => {
    projectId = 1;
    userId = 100;

    cmp = createCmp({
      users: [],
      selectedproject: {id: projectId},
      projects:{1:data.projects[projectId]}
    });
    shift = data.projects[projectId].shifts[0];

  });

  it('should adds new shift to shifts array', () => {
    router.push({name: 'shiftAdd', params: {userId: userId}})
    // //TODO cmp.vm.goToNext = jest.fn();
    cmp.vm.addShift(shift);
    //
    //TODO expect(cmp.vm.goToNext).toBeCalled()
    //
    expect(cmp.vm.projects[projectId].shifts[0].name).to.equal(shift.name);
    expect(cmp.vm.projects[projectId].shifts[0].userId).to.equal(userId);

  });*/
});
