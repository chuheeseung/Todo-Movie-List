import React from 'react';
import TodoList from '../components/Todo/TodoList';
import styles from './TodoPage.module.css';

function TodoPage() {
	return (
		<div className={styles.todoList}>
			<div className={styles.title}>Todos</div>
			<TodoList />
		</div>
	);
}

export default TodoPage;
