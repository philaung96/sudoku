import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<nav>
			<Link to='/'>Menu</Link>
			<Link to='game'>Game</Link>
			<Link to='about'>About</Link>
		</nav>
	);
};
export default Header;