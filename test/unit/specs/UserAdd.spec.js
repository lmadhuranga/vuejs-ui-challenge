import Vue from 'vue'
import UserAdd from '@/components/UserAdd'

describe('UserAdd.vue', () => {
    var propsData = {people: []};
    it('should render correct contents', () => {
        const Constructor = Vue.extend(UserAdd);
        const AddUserComponent = new Constructor({propsData: propsData}).$mount();
        expect(AddUserComponent.$el.querySelector('.toolbar__title').textContent)
            .to.equal('Add User')
    });

    it('adds new users to people array', () => {
        // build component
        const Constructor = Vue.extend(UserAdd);
        const AddUserComponent = new Constructor({propsData: propsData}).$mount();

        // set input value
        AddUserComponent.user = {
            name: 'Randika',
            email: 'randika@gmail.com'
        };

        // simulate click event
        const button = AddUserComponent.$el.querySelector('.btn');
        button.dispatchEvent('click');

        // // assert list contains new item
        expect(AddUserComponent.people()).isEqual('brush my teeth');
        // expect(ListComponent.data().listItems).to.contain('brush my teeth');
    });
});
