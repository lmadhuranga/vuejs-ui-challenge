import TabHeaderCollection from '../../src/components/template/TabHeaderCollection.vue'
import {shallow, mount} from "vue-test-utils"
import router from '../../src/router'

describe('TabHeaderCollection.vue', () => {
  let cmp, currentRoute;

  const createCmp = propsData => mount(TabHeaderCollection, {
    propsData, router
  });

  beforeEach(() => {
    currentRoute = 'addUser';

    cmp = createCmp({
      currentRoute
    });
  });

  it('should be able load prop values', () => {
    expect(cmp.vm.currentRoute).toEqual(currentRoute);
  });



});
