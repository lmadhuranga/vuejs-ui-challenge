import Vue from 'vue'
import UserAdd from '../../../../../src/components/pages/setup/UserAdd.vue'
import router from '../../../../../src/router/index'
import data from '../../../../../src/config/data'
import {shallow, mount} from "vue-test-utils"


describe('UserAdd.vue', () => {
  let cmp, user, expectedusers;
  const createCmp = propsData => mount(UserAdd, {propsData, router:router})

  beforeEach(() => {
    cmp = createCmp({users: []})
    user = data.users[0];
    expectedusers = [user];
  });

  it('should adds new users to users array', () => {

    //TODO cmp.vm.goToNext = jest.fn();
    cmp.vm.addUser({
      name: user.name,
      postCode: user.postCode
    });

    //TODO expect(cmp.vm.goToNext).toBeCalled()
    expect(cmp.vm.users[0].name).to.equal(expectedusers[0].name);
    expect(cmp.vm.users[0].postCode).to.equal(expectedusers[0].postCode);
  });
});
