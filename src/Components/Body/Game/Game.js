import './Game.css';
import Timer from './Timer/Timer';
import Grid from './Grid/Grid';
import Answer from './Answer/Answer';
import $ from 'jquery';
import Tile from './Grid/Tile/Tile';

const Game = () => {
	let selected = null;
	const selectTile = (e, tile) => {
		if (!tile.show) {
			selected = tile;
			console.log(selected);
		} else selected = null;
	};
	const selectAnswer = (e, answer) => {
		console.log(answer, selected);
		if (answer === selected.num)
			$('.tile')[selected.pos].innerHTML = `<button>${answer}</button>`;
	};

	return (
		<div id='game'>
			<h1 id='title'>SUDOKU</h1>
			{/* <Timer /> */}
			<Grid selectTile={selectTile} />
			<Answer selectAnswer={selectAnswer} />
		</div>
	);
};

export default Game;
