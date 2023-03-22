import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Nav } from '@/pages/nav'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'

const inter = Inter({ subsets: ['latin'] })

interface Todo {
	id: number
	text: string
	completed: boolean
}

class TodoModel {
	todos: Todo[] = [
		{ id: 1, text: 'Todo 1', completed: false },
		{ id: 2, text: 'Todo 2', completed: true },
		{ id: 3, text: 'Todo 3', completed: false },
	]

	constructor() {
		makeAutoObservable(this)
	}

	addTodo(todo: string) {
		const newTodo: Todo = { id: Date.now(), text: todo, completed: false }
		this.todos.push(newTodo)
	}

	toggleComplete(id: number) {
		const todoIndex = this.todos.findIndex((todo) => todo.id === id)
		if (todoIndex > -1) {
			this.todos[todoIndex].completed = !this.todos[todoIndex].completed
		}
	}
}

const todoModel = new TodoModel()

const TodoList = observer(({ todoModel }: { todoModel: TodoModel }) => {
	return (
		<ul>
			{todoModel.todos.map((todo) => (
				<li key={todo.id}>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={() => todoModel.toggleComplete(todo.id)}
					/>
					<span>{todo.text}</span>
				</li>
			))}
		</ul>
	)
})

const AddTodoForm = observer(({ todoModel }: { todoModel: TodoModel }) => {
	const [todo, setTodo] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		todoModel.addTodo(todo)
		setTodo('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button type="submit">Add Todo</button>
		</form>
	)
})

const TodoApp = observer(() => {
	return (
		<>
			<h1>MVVM Sample</h1>
			<TodoList todoModel={todoModel} />
			<AddTodoForm todoModel={todoModel} />
		</>
	)
})

export default function Home() {
	return (
		<>
			<Nav />
			<TodoApp />
		</>
	)
}
