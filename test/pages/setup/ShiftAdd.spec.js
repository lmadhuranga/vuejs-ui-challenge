import Vue from 'Vue';
import ShiftAdd from '../../../src/components/pages/setup/ShiftAdd.vue'
import router from '../../../src/router/index'
import data from '../../../src/config/data'
import {shallow, mount} from "vue-test-utils"
import VueRouter from 'vue-router'


describe('ShiftAdd.vue', () => {

  Vue.use(VueRouter);
  let cmp, user, shift, projectId, userId;

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
    // send route params
    router.push({name: 'shiftAdd', params: {userId: userId}})
    cmp.vm.goToNext = jest.fn();
    cmp.vm.addShift(shift);

    expect(cmp.vm.goToNext).toBeCalled();
    expect(cmp.vm.projects[projectId].shifts[0].name).toEqual(shift.name);
    expect(cmp.vm.projects[projectId].shifts[0].userId).toEqual(userId);

  });
});
