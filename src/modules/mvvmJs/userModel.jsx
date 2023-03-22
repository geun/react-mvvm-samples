import { observable, action } from 'mobx';

class UserModel {
    @observable name = '';
    @observable email = '';
    @observable password = '';

    @action setName(name) {
        this.name = name;
    }

    @action setEmail(email) {
        this.email = email;
    }

    @action setPassword(password) {
        this.password = password;
    }
}

export default UserModel;
