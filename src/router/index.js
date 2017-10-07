import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/HomePage'
import UserAdd from '@/components/pages/UserAdd'
import UserView from '@/components/pages/UserView'
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
            path: '/add',
            name: 'add',
            component: UserAdd
        },
        {
            path: '/:id',
            name: 'userView',
            component: UserView
        }
    ]
})

