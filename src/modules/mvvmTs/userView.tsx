import React from 'react'
import { observer } from 'mobx-react'
import UserViewModel from './userViewModel'

@observer
class UserForm extends React.Component<any, any> {
	userViewModel = new UserViewModel()

	handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('handleNameChange', e.target.value)
		this.userViewModel.setName(e.target.value)
	}

	handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('handleEmailChange', e.target.value)
		this.userViewModel.setEmail(e.target.value)
	}

	handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log('handlePasswordChange', e.target.value)
		this.userViewModel.setPassword(e.target.value)
	}

	render() {
		const { name, email, password } = this.userViewModel.userModel
		return (
			<div>
				<input
					type="text"
					// value={name}
					placeholder={'이름을 입력하세요'}
					onChange={this.handleNameChange}
				/>
				<input
					type="email"
					placeholder={'이메일을 입력하세요'}
					// value={email}
					onChange={this.handleEmailChange}
				/>
				<input
					type="password"
					placeholder={'비밀번호를 입력하세요'}
					// value={password}
					onChange={this.handlePasswordChange}
				/>
			</div>
		)
	}
}

export default UserForm
