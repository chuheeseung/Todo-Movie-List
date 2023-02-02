import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { v1 } from 'uuid';
import Loading from './Loading';
import styles from './Movies.module.css';

function Movies() {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		axios({
			method: 'GET',
			url: 'https://yts.mx/api/v2/list_movies.json?limit=50',
		})
			.then((res) => {
				// eslint-disable-next-line
				res.data.data.movies.map((movie) => {
					const title = movie.title;
					setMovies((movies) => [...movies, title]);
					setLoading(false);
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className={styles.movies}>
			{loading ? <Loading /> : null}
			{movies.map((movie) => (
				<div key={v1()} className={styles.movie}>
					{movie}
				</div>
			))}
		</div>
	);
}

export default Movies;
