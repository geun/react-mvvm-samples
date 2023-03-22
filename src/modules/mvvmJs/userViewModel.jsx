import { observable, action } from 'mobx';
import UserModel from './userModel';

class UserViewModel {
    @observable userModel;

    constructor() {
        this.userModel = new UserModel();
    }

    @action setName(name) {
        this.userModel.setName(name);
    }

    @action setEmail(email) {
        this.userModel.setEmail(email);
    }

    @action setPassword(password) {
        this.userModel.setPassword(password);
    }
}

export default UserViewModel;
