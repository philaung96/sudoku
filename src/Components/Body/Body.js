import './Body.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Game from './Game/Game';
import About from './About/About';

const Body = () => {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/game' element={<Game />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</main>
	);
};

export default Body;
