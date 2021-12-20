import { Routes, Route } from 'react-router-dom';
import Menu from './Menu/Menu';
import Game from './Game/Game';
import About from './About/About';

const Body = () => {
	return (
		<div>
			Body
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/game' element={<Game />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
};

export default Body;
