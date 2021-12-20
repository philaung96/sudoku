import './Grid.css';
import { useEffect, useState } from 'react';

const Grid = () => {
	const [grid, setGrid] = useState([]);
	let gridJsx = [];

	// Initializes the grid with a 4d array of random
	// values
	const initGrid = () => {
		// Create a 4d array of undefined values
		const tempGrid = [...Array(3)].map((outerRow) =>
			[...Array(3)].map((outerCol) => [...Array(3)].map((innerRow) => Array(3)))
		);

		// Fill the 4d array with random values
		for (let outerRow = 0; outerRow < 3; outerRow++)
			for (let outerCol = 0; outerCol < 3; outerCol++)
				for (let innerRow = 0; innerRow < 3; innerRow++)
					for (let innerCol = 0; innerCol < 3; innerCol++) {
						const random = Math.ceil(Math.random() * 9);
						tempGrid[outerRow][outerCol][innerRow][innerCol] = random;
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
