import Vue from 'vue'
import expect, {spyOn} from 'expect';
import UserAdd from '../../../src/components/pages/UserAdd.vue'

describe('UserAdd.vue', () => {
    let Constructor, AddUserComponent, propsData, expectedusers;

    beforeEach(() => {
        propsData = {users: []};
        Constructor = Vue.extend(UserAdd);
        AddUserComponent = new Constructor({propsData: propsData}).$mount();
        expectedusers = [{
            name: 'Randika',
            email: 'randika@gmail.com'
        }];
    });

    it('should render correct contents', () => {
        expect(AddUserComponent.$el.querySelector('.toolbar__title').textContent)
            .to.equal('Add User')
    });

    it('should users array length', () => {
        expect(AddUserComponent.randNumber()).to.equal(1);
        AddUserComponent.users.push(expectedusers[0]);
        expect(AddUserComponent.randNumber()).to.equal(2);
    });

    it('should adds new users to users array', () => {

        AddUserComponent.addUser({
            name: 'Randika',
            email: 'randika@gmail.com'
        });

        expect(AddUserComponent.toHome).to.have.been.called();
        expect(AddUserComponent.users[0].name).to.equal(expectedusers[0].name);
        expect(AddUserComponent.users[0].email).to.equal(expectedusers[0].email);
    });

    /*it('should adds new users to users array', () => {
        AddUserComponent.toHome();

        expect(AddUserComponent.users[0].name).to.equal(expectedusers[0].name);
        expect(AddUserComponent.users[0].email).to.equal(expectedusers[0].email);
    });*/
});