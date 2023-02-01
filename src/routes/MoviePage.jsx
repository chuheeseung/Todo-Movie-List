import React from 'react';
import Movies from '../components/Movie/Movies';
import styles from './MoviePage.module.css';

function MoviePage(props) {
	return (
		<div className={styles.movieList}>
			<div className={styles.text}>Movie list</div>
			<Movies />
		</div>
	);
}

export default MoviePage;
