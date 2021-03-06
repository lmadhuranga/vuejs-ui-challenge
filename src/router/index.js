import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/HomePage'
import SetupContainer from '@/components/pages/SetupContainer'

import ProjectsList from '@/components/pages/setup/ProjectsList'
import SelectedShift from '@/components/pages/setup/SelectedShift'
import FloorManagersList from '@/components/pages/setup/FloorManagersList'
import UserAdd from '@/components/pages/setup/UserAdd'
import ShiftAdd from '@/components/pages/setup/ShiftAdd'

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
    },
    {
      path: '/setup',
      name: 'setup',
      component: SetupContainer,
      children: [
        {
          name:'projectsList',
          path: 'projectsList',
          component: ProjectsList
        },
        {
          name:'selectedShift',
          path: 'selectedShift/:projectId/:shiftId',
          component: SelectedShift
        },
        {
          name:'floorManagersList',
          path: 'floorManagersList',
          component: FloorManagersList
        },
        {
          name:'userAdd',
          path: 'userAdd',
          component: UserAdd
        },
        {
          name:'shiftAdd',
          path: 'shiftAdd/:userId',
          component: ShiftAdd
        },


      ]
    }
  ]
})

