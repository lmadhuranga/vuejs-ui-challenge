import Vue from 'vue'
import Home from '../../../../src/components/pages/HomePage.vue'
import Router from '../../../../src/router/index'
import data from '../../../../src/config/data'
import {shallow, mount} from "vue-test-utils"


describe("App.test.js", () => {
  let cmp
  const createCmp = propsData => mount(Home, {propsData})

  beforeEach(() => {
    cmp = createCmp( {users: data.users})
  });
  //
  it('Should be load page header', () => {
    expect(cmp.find('h2').text()).to.equal('Home Page')
  });
})
