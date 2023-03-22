import { observable, action } from 'mobx'

class UserModel {
	@observable name = ''
	@observable email = ''
	@observable password = ''

	@action setName(name: string) {
		this.name = name
	}
	@action setEmail(email: string) {
		this.email = email
	}

	@action setPassword(password: string) {
		this.password = password
	}
}

export default UserModel
