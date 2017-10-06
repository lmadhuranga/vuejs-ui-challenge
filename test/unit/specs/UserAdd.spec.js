import Vue from 'vue'
import UserAdd from '@/components/UserAdd'

describe('UserAdd.vue', () => {
    let Constructor, AddUserComponent, propsData;

    beforeEach(() => {
        propsData = {people: []};
        Constructor = Vue.extend(UserAdd);
        AddUserComponent = new Constructor({propsData: propsData}).$mount();

        jest.spyOn(AddUserComponent, '$router').and.callThrough();
    });

    it('should render correct contents', () => {
        expect(AddUserComponent.$el.querySelector('.toolbar__title').textContent)
            .to.equal('Add User')
    });

    it('adds new users to people array', () => {
        let expectedPeople = [{
            name: 'Randika',
            email: 'randika@gmail.com',
            id: 1
        }];

        AddUserComponent.addUser({
            name: 'Randika',
            email: 'randika@gmail.com'
        });

        expect(AddUserComponent.people[0].name).to.equal(expectedPeople[0].name);
        expect(AddUserComponent.people[0].email).to.equal(expectedPeople[0].email);
        // expect(AddUserComponent.people[0].email).to.equal(expectedPeople[0].email);
    });
});
