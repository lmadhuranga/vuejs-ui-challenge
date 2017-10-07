import Vue from 'vue'
import User from '../../../../src/components/user/User.vue'

describe('user/User.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(User);
        let users = [{
            id: 1,
            name: 'Randika',
            email: 'randika@gmail.com'
        }];
        const UserComponent = new Constructor({propsData: {user:users[0]}}).$mount();
        expect(UserComponent.$el.querySelector('.list__tile__title').textContent)
            .to.equal('Randika - randika@gmail.com\n             ')
    })
});
