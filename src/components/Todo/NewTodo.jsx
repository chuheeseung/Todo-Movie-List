import React, { useState } from 'react';
import styles from './NewTodo.module.css';
import { useRecoilState } from 'recoil';
import { todoState } from '../../states/todoState';
import { v1 } from 'uuid';

function NewTodo(props) {
	const [todos, setTodos] = useRecoilState(todoState);
	const [newTodo, setNewTodo] = useState('');

	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};

	const handleEnter = (e) => {
		if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
			e.preventDefault();

			setTodos([
				...todos,
				{
					id: v1(),
					text: newTodo,
					isCompleted: false,
				},
			]);

			setNewTodo('');
		}
	};

	return (
		<form className={styles.form}>
			<input
				type="text"
				placeholder="무엇을 해야하나요?"
				className={styles.input}
				value={newTodo}
				onChange={handleChange}
				onKeyDown={handleEnter}
			/>
		</form>
	);
}

export default NewTodo;
