import './Grid.css';
import { useEffect, useState } from 'react';
import Tile from './Tile/Tile';

const Grid = (props) => {
	const [grid, setGrid] = useState([]);
	let gridJsx = [];

	// determines whether a number is valid to be added
	// to the current position
	// num -> the number to be added -> int
	// index -> 1d index of inner 2d array of num -> int
	// outerRow -> index of outer row -> int
	// outerCol -> index of outer column -> int
	// grid -> 4d grid of objects -> [[[[{}]]]]
	const canAdd = (num, index, outerRow, outerCol, grid) => {
		const innerRow = Math.floor(index / 3);
		const innerCol = index % 3;

		// if there is a number at current position
		// return false
		if (grid[outerRow][outerCol][innerRow][innerCol]) return false;

		// for each outer column of current outer row,
		// check every inner column of current inner row
		// if any tile is same as num return false
		// [-][-][-] [-][-][-] [-][-][-]
		// [-][x][-] [o][o][o] [o][o][o]
		// [-][-][-] [-][-][-] [-][-][-]
		// ...
		for (let i = 0; i < 3; i++)
			if (i !== outerCol)
				for (let j = 0; j < 3; j++)
					if (
						grid[outerRow][i][innerRow][j] &&
						grid[outerRow][i][innerRow][j].num === num
					)
						return false;

		// for each outer row of current outer column,
		// check every inner row of current inner column
		// if any tile is same as num return false
		// [-][-][-] ...
		// [-][-][x] ...
		// [-][-][-] ...
		//
		// [-][-][o] ...
		// [-][-][o] ...
		// [-][-][o] ...
		//
		// [-][-][o] ...
		// [-][-][o] ...
		// [-][-][o] ...
		for (let i = 0; i < 3; i++)
			if (i !== outerRow)
				for (let j = 0; j < 3; j++)
					if (
						grid[i][outerCol][j][innerCol] &&
						grid[i][outerCol][j][innerCol].num === num
					)
						return false;

		// return true by default if any number same as
		// current not found on right or bottom
		return true;
	};

	// Initializes the grid with a 4d array of objects
	// Outer grid will be 3x3 array of 2d arrays
	// [[][]] [[][]] [[][]]
	// [[][]] [[][]] [[][]]
	// [[][]] [[][]] [[][]]
	// Inner grid will be 3x3 array of objects
	// [{}] [{}] [{}]
	// [{}] [{}] [{}]
	// [{}] [{}] [{}]
	const initGrid = () => {
		// Create a 4d array of undefined values
		let tempGrid = [...Array(3)].map((outerRow) =>
			[...Array(3)].map((outerCol) => [...Array(3)].map((innerRow) => Array(3)))
		);

		// Fill the 4d array with random values
		// iterate each outer row
		for (let outerRow = 0; outerRow < 3; outerRow++)
			// iterate each outer column
			for (let outerCol = 0; outerCol < 3; outerCol++) {
				// empty tiles of inner 2d array
				// to keep track of number 1-9 inside
				// inner array
				const emptySpots = [0, 1, 2, 3, 4, 5, 6, 7, 8];
				// iterate 1 through 9
				for (let num = 1; num < 10; num++) {
					// create a clone of inner array
					// indices to keep track of the index
					// which a number can be placed
					const emptyClone = [...emptySpots];

					// generate a random number from
					// index clone array
					let random = Math.floor(Math.random() * emptyClone.length);

					// if there is an index to check and
					// the number cannot be added to
					// random index
					while (
						emptyClone.length > 0 &&
						!canAdd(num, emptyClone[random], outerRow, outerCol, tempGrid)
					) {
						// delete the current random
						// index
						emptyClone.splice(random, 1);
						// find a new random index
						random = Math.floor(Math.random() * emptyClone.length);
					}
					// if there is no index for current
					// number to be added on
					if (emptyClone.length === 0) {
						// reset the 4d array
						tempGrid = [...Array(3)].map((outerRow) =>
							[...Array(3)].map((outerCol) =>
								[...Array(3)].map((innerRow) => Array(3))
							)
						);
						//reset outer row
						outerRow = 0;
						//reset the outer column
						outerCol = -1;
						// break out of current loop
						break;
					} else {
						// turn 1d index into 2d row and col
						const innerRow = Math.floor(emptyClone[random] / 3);
						const innerCol = emptyClone[random] % 3;

						// delete the index from empty
						// spots since it will be
						// occupied by a number
						emptySpots.splice(emptySpots.indexOf(emptyClone[random]), 1);

						// get a random number from 1-100
						const showPercent = Math.ceil(Math.random() * 100);
						// hide ~60% of the tiles
						// if random is more than 40
						// hide the tile
						let show = true;
						if (showPercent > 40) show = false;
						// set the number at the position
						// where it should be
						tempGrid[outerRow][outerCol][innerRow][innerCol] = {
							num: num,
							show: show,
							pos: (outerRow * 3 + outerCol) * 9 + (innerRow * 3 + innerCol),
						};
					}
				}
			}

		// set the state for component to re-render
		setGrid(tempGrid);
	};

	// On initial component render, initialize the grid
	useEffect(() => {
		initGrid();
	}, []);

	// If the grid is initialized, map through the 4d
	// array, and create html elements to display on
	// browser
	if (grid)
		gridJsx = grid.map((outerRow, outerRowIndex) =>
			outerRow.map((outerCol, outerColIndex) => (
				<div className='inner-grid' key={outerRowIndex * 3 + outerColIndex}>
					{outerCol.map((innerRow, innerRowIndex) =>
						innerRow.map((innerCol, innerColIndex) => (
							<Tile tile={innerCol} selectTile={props.selectTile} />
						))
					)}
				</div>
			))
		);

	return <div id='outer-grid'>{gridJsx}</div>;
};

export default Grid;
