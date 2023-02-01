import React, { useState } from 'react';
import styles from './Todo.module.css';

function Todo({ todo, onUpdate, onDelete }) {
	const [completed, setCompleted] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [updateTodo, setUpdateTodo] = useState('');

	const handleCompleted = () => {
		setCompleted(!completed);
	};

	const handleChange = (e) => {
		setUpdateTodo(e.target.value);
	};

	const handleUpdate = (e) => {
		if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
			e.preventDefault();

			onUpdate({
				id: todo.id,
				text: updateTodo,
				isCompleted: todo.isCompleted,
			});

			setToggle(!toggle);
		}
	};

	const handleToggle = () => {
		setToggle(!toggle);
	};

	const handleDelete = () => {
		onDelete(todo);
	};

	return (
		<li className={styles.todoItem} onClick={handleCompleted}>
			{!toggle && (
				<p className={completed ? styles.completed : styles.text}>
					{todo.text}
				</p>
			)}
			{toggle && (
				<input
					type="text"
					placeholder={todo.text}
					className={styles.input}
					onChange={handleChange}
					onKeyPress={handleUpdate}
				/>
			)}
			{!toggle && (
				<span>
					<button className={styles.update} onClick={handleToggle}>
						수정
					</button>
					<button className={styles.delete} onClick={handleDelete}>
						삭제
					</button>
				</span>
			)}
		</li>
	);
}

export default Todo;
