import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<header>
			<Link to='/'>
				<h1>MENU</h1>
			</Link>
			<Link to='game'>
				<h1>GAME</h1>
			</Link>
			<Link to='about'>
				<h1>ABOUT</h1>
			</Link>
		</header>
	);
};
export default Header;
