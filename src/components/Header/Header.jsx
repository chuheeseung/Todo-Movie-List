import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Header(props) {
	const [button, setButton] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		navigate(`/${button}`);
	}, [button, navigate]);

	return (
		<header className={styles.header}>
			<div className={styles.name}>프로그라피 프론트 추희승</div>
			<div className={styles.routes}>
				<button className={styles.button} onClick={() => setButton('')}>
					Todo
				</button>
				<button className={styles.button} onClick={() => setButton('movie')}>
					영화
				</button>
			</div>
		</header>
	);
}

export default Header;
