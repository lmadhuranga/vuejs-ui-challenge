import GotoHome from '../../src/components/template/GotoHome.vue'
import {shallow, mount} from "vue-test-utils"
import router from '../../src/router'

describe('GotoHome.vue', () => {
  let cmp;

  const createCmp = propsData => mount(GotoHome, {
    propsData, router
  });

  beforeEach(() => {
    cmp = createCmp({});
  });

  it('should be able load correct label', () => {
    expect(cmp.find('.panelClose').text().trim()).toEqual('X');
  });

});
