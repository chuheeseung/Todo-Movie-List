import React from 'react';
import styles from './Loading.module.css';
import Spinner from '../../assets/spinner.gif';

function Loading(props) {
	return (
		<div className={styles.background}>
			<div className={styles.text}>잠시만 기다려주세요.</div>
			<img src={Spinner} alt="로딩중" width="5%" />
		</div>
	);
}

export default Loading;
