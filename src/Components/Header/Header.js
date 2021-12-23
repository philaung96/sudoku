import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<header>
			<Link to='/'>
				<h3>MENU</h3>
			</Link>
			<Link to='game'>
				<h3>GAME</h3>
			</Link>
			<Link to='about'>
				<h3>ABOUT</h3>
			</Link>
		</header>
	);
};
export default Header;
