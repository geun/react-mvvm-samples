import { observable, action } from 'mobx';
import UserModel from './userModel';

class UserViewModel {
    @observable userModel = new UserModel();

    @action setName(name: string) {
        this.userModel.setName(name);
    }

    @action setEmail(email: string) {
        this.userModel.setEmail(email);
    }

    @action setPassword(password: string) {
        this.userModel.setPassword(password);
    }
}

export default UserViewModel;
