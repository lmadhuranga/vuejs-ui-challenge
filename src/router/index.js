import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserAdd from '@/components/UserAdd'
import PeopleListing from '@/components/PeopleListing'
import PersonDetail from '@/components/PersonDetail'
import Vuetify from 'vuetify'

Vue.use(Vuetify);
Vue.use(Router);

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
    ,{
      path: '/user',
      name: 'user',
      component: PeopleListing
    }
    ,{ path: '/add', name:'add', component: UserAdd }
    ,{path: '/:id', name: 'person', component: PersonDetail}
  ]
})

