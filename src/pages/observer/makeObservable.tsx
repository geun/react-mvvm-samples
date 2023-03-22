import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { makeAutoObservable } from 'mobx'

class TodoStore {
	todos = []

	constructor() {
		makeAutoObservable(this)
	}

	addTodo(todo) {
		this.todos.push(todo)
	}

	toggleComplete(id) {
		this.todos = this.todos.map((todo) =>
			todo.id === id ? { ...todo, completed: !todo.completed } : todo,
		)
	}
}

const todoStore = new TodoStore()

const TodoList = observer(({ todoStore }) => {
	return (
		<ul>
			{todoStore.todos.map((todo) => (
				<li key={todo.id}>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={() => todoStore.toggleComplete(todo.id)}
					/>
					<span>{todo.text}</span>
				</li>
			))}
		</ul>
	)
})

const AddTodoForm = observer(({ todoStore }) => {
	const [todo, setTodo] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		const newTodo = { id: Date.now(), text: todo, completed: false }
		todoStore.addTodo(newTodo)
		setTodo('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button type="submit">Add Todo</button>
		</form>
	)
})

const TodoApp = () => {
	return (
		<>
			<h1>MobX Sample with Function Components</h1>
			<TodoList todoStore={todoStore} />
			<AddTodoForm todoStore={todoStore} />
		</>
	)
}

export default TodoApp
