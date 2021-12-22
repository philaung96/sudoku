import './Grid.css';
import { useEffect, useState } from 'react';

const Grid = () => {
	const [grid, setGrid] = useState([]);
	let gridJsx = [];

	const canAdd = (num, index, outerRow, outerCol, grid) => {
		const innerRow = Math.floor(index / 3);
		const innerCol = index % 3;

		if (grid[outerRow][outerCol][innerRow][innerCol]) return false;

		for (let i = 0; i < 3; i++)
			if (i !== outerCol)
				for (let j = 0; j < 3; j++)
					if (grid[outerRow][i][innerRow][j] === num) return false;

		for (let i = 0; i < 3; i++)
			if (i !== outerRow)
				for (let j = 0; j < 3; j++)
					if (grid[i][outerCol][j][innerCol] === num) return false;

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

		for (let outerRow = 0; outerRow < 3; outerRow++)
			for (let outerCol = 0; outerCol < 3; outerCol++) {
				const emptySpots = [0, 1, 2, 3, 4, 5, 6, 7, 8];
				for (let num = 1; num < 10; num++) {
					const clone = [...emptySpots];
					// choose a random index for a
					// specific number
					let random = Math.floor(Math.random() * clone.length);

					// if there is a number at random
					// index or the number cannot be
					// added to that index
					while (
						clone.length > 0 &&
						!canAdd(num, clone[random], outerRow, outerCol, tempGrid)
					) {
						clone.splice(random, 1);
						// find a new random index
						random = Math.floor(Math.random() * clone.length);
					}
					if (clone.length === 0) {
						tempGrid = [...Array(3)].map((outerRow) =>
							[...Array(3)].map((outerCol) =>
								[...Array(3)].map((innerRow) => Array(3))
							)
						);
						outerRow = 0;
						outerCol = -1;
						break;
					} else {
						// turn 1d index into 2d row and col
						const innerRow = Math.floor(clone[random] / 3);
						const innerCol = clone[random] % 3;

						emptySpots.splice(emptySpots.indexOf(clone[random]), 1);

						// set the number at the position
						// where it should be
						tempGrid[outerRow][outerCol][innerRow][innerCol] = num;
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
							<div
								className='tile'
								key={
									(outerRowIndex * 3 + outerColIndex) * 9 +
									(innerRowIndex * 3 + innerColIndex)
								}>
								<p>{innerCol}</p>
							</div>
						))
					)}
				</div>
			))
		);

	return <div id='outer-grid'>{gridJsx}</div>;
};

export default Grid;
