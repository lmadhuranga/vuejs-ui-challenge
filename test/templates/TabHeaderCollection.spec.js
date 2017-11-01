import TabHeaderCollection from '../../src/components/template/TabHeaderCollection.vue'
import {shallow, mount} from "vue-test-utils"
import router from '../../src/router'

describe('TabHeaderCollection.vue', () => {
  let cmp, currentRoute;
  const createCmp = propsData => mount(TabHeaderCollection, {
    propsData, router
  });

  beforeEach(() => {
    currentRoute = 'userAdd';

    cmp = createCmp({
      currentRoute
    });
  });

  it('should be able load prop values', () => {
    expect(cmp.vm.currentRoute).toEqual(currentRoute);
  });

  it('should be userAdd coumputed value change', () => {
    expect(cmp.vm.userAdd).toEqual(true);
    expect(cmp.vm.floorManagersList).toEqual(false);
    expect(cmp.vm.shiftAdd).toEqual(false);
  });

  it('should be floorManagersList coumputed value change', () => {
    cmp = createCmp({
      currentRoute:'floorManagersList'
    });

    expect(cmp.vm.userAdd).toEqual(false);
    expect(cmp.vm.floorManagersList).toEqual(true);
    expect(cmp.vm.shiftAdd).toEqual(false);
  });

  it('should be shiftAdd coumputed value change', () => {
    cmp = createCmp({
      currentRoute:'shiftAdd'
    });

    expect(cmp.vm.userAdd).toEqual(false);
    expect(cmp.vm.floorManagersList).toEqual(false);
    expect(cmp.vm.shiftAdd).toEqual(true);
  });

  it('should be get the full url ', () => {
      expect(cmp.vm.getSetupUrl(currentRoute)).toEqual("/setup/userAdd");
  });

});
