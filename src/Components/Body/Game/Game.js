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
			console.log(selected, $('.tile:nth-child(1)'));
			// $('.tile')[selected.pos].firstChild.addClass('border-red');
			$('.tile')[selected.pos].outerHTML =
				'<div class="tile"><button class="border-red"></button></div>';
		} else selected = null;
	};
	const selectAnswer = (e, answer) => {
		console.log(answer, selected);
		if (answer === selected.num)
			$('.tile')[
				selected.pos
			].outerHTML = `<div class="tile"><button>${answer}</button></div>`;
		else
			$('.tile')[selected.pos].outerHTML =
				'<div class="tile"><button></button></div>';
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
