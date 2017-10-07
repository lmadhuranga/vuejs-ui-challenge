import Vue from 'vue'
import expect, {spyOn} from 'expect';
import UserAdd from '../../../../src/components/pages/UserAdd.vue'
import NavBar from '../../../../src/components/template/NavBar.vue'

describe('UserAdd.vue', () => {
    let Constructor, AddUserComponent, propsData, expectedusers;

    beforeEach(() => {
        propsData = {users: []};
        Constructor = Vue.extend(UserAdd);
        AddUserComponent = new Constructor({propsData: propsData, components:{NavBar:NavBar}}).$mount();
        expectedusers = [{
            name: 'Randika',
            email: 'randika@gmail.com'
        }];
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

        expect(AddUserComponent.users[0].name).to.equal(expectedusers[0].name);
        expect(AddUserComponent.users[0].email).to.equal(expectedusers[0].email);
    });
});
