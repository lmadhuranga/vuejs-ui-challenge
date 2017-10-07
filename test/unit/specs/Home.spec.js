import Vue from 'vue'
import Home from '../../../src/components/pages/HomePage.vue'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const HomeComponent = new Constructor().$mount();
    expect(HomeComponent.$el.querySelector('.toolbar__title').textContent)
      .to.equal('Home Page')
  })
});
