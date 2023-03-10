import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoPage from './routes/TodoPage';
import MoviePage from './routes/MoviePage';
import NotFound from './routes/NotFound';
import Header from './components/Header/Header';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		console.log(process.env.PUBLIC_URL);
	}, []);
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<TodoPage />} />
				<Route path="/movie" element={<MoviePage />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
