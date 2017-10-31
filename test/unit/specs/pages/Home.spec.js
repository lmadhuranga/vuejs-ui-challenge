import Vue from 'vue'
import Home from '../../../../src/components/pages/HomePage.vue'
import Router from '../../../../src/router/index'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const HomeComponent = new Constructor({router: Router}).$mount();

    expect(HomeComponent.$el.querySelector('h2').textContent).to.equal('Home Page');
  });
});
