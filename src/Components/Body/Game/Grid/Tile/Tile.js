import './Tile.css';

const Tile = (props) => {
	return (
		<div className='tile'>
			<button
				onClick={(e) => props.selectTile(e, props.tile)}
				className={props.border ? 'border-red' : ''}>
				{props.tile.show ? props.tile.num : ''}
			</button>
		</div>
	);
};

export default Tile;
