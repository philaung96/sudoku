import Answer from './Answer/Answer';
import './Game.css';
import Grid from './Grid/Grid';

const Game = () => {
	return (
		<div id='game'>
			<Grid />
			<Answer />
		</div>
	);
};

export default Game;
