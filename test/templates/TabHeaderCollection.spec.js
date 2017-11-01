import TabHeaderCollection from '../../src/components/template/TabHeaderCollection.vue'
import {shallow, mount} from "vue-test-utils"
import router from '../../src/router'

describe('TabHeaderCollection.vue', () => {
  let cmp, currentRoute;

  const createCmp = propsData => mount(TabHeaderCollection, {
    propsData, router
  });

  beforeEach(() => {
    msg = 'Go to home page';
    path = '/setup/';

    cmp = createCmp({
      msg, path
    });
  });

  it('should be able load given path for link', () => {
    expect(cmp.vm.path).toEqual(path);
    expect(cmp.find('.accordionHeader a').element.getAttribute('href')).toEqual(`#${path}`);
  });

  it('should be load the label of the link', () => {
    expect(cmp.vm.msg).toEqual(msg);
    expect(cmp.find('.accordionHeader a').text().trim()).toEqual("<  Go to home page");
  });

});
