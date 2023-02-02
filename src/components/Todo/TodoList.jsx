import React from 'react';
import styles from './TodoList.module.css';
import NewTodo from './NewTodo';
import Todo from './Todo';
import { useRecoilState } from 'recoil';
import { todoState } from '../../states/todoState';

function TodoList() {
	const [todos, setTodos] = useRecoilState(todoState);

	const handleUpdate = (updated) => {
		setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
	};

	const handleDelete = (deleted) => {
		setTodos(todos.filter((todo) => todo.id !== deleted.id));
	};

	return (
		<div className={styles.todoList}>
			<NewTodo />
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					onUpdate={handleUpdate}
					onDelete={handleDelete}
				/>
			))}
		</div>
	);
}

export default TodoList;
