import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserAdd from '@/components/UserAdd'
import PeopleListing from '@/components/PeopleListing'
import PersonDetail from '@/components/PersonDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: PeopleListing
    }
    ,{ path: '/add', name:'add', component: UserAdd }
    ,{path: '/:id', name: 'person', component: PersonDetail}
  ]
})

