import Vue from 'vue'
import UserAdd from '@/components/UserAdd'

describe('UserAdd.vue', () => {
    let Constructor, AddUserComponent, propsData, expectedPeople;

    beforeEach(() => {
        propsData = {people: []};
        Constructor = Vue.extend(UserAdd);
        AddUserComponent = new Constructor({propsData: propsData}).$mount();
        expectedPeople = [{
            name: 'Randika',
            email: 'randika@gmail.com'
        }];
    });

    it('should render correct contents', () => {
        expect(AddUserComponent.$el.querySelector('.toolbar__title').textContent)
            .to.equal('Add User')
    });

    it('should people array length', () => {
        expect(AddUserComponent.randNumber()).to.equal(1);
        AddUserComponent.people.push(expectedPeople[0]);
        expect(AddUserComponent.randNumber()).to.equal(2);
    });

    it('should adds new users to people array', () => {
        AddUserComponent.addUser({
            name: 'Randika',
            email: 'randika@gmail.com'
        });

        expect(AddUserComponent.people[0].name).to.equal(expectedPeople[0].name);
        expect(AddUserComponent.people[0].email).to.equal(expectedPeople[0].email);
    });


});
