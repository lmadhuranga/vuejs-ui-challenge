import Vue from 'vue'
import Home from '../../src/components/pages/HomePage.vue'
import router from '../../src/router/index'
import data from '../../src/config/data'
import {shallow, mount} from "vue-test-utils"


describe("HomePage", () => {
  let cmp;
  const createCmp = propsData => mount(Home, {propsData, router: router})

  beforeEach(() => {
    cmp = createCmp({users: data.users})
  });

  it('Should be load page header', () => {
    expect(cmp.find('h2').text()).toEqual('Home Page')
  });
});
