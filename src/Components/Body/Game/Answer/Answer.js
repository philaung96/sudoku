import './Answer.css';

const Answer = () => {
	const answerJsx = [...Array(9)].map((e, index) => (
		<div className='tile' key={index}>
			{index + 1}
		</div>
	));
	return <div id='answers'>{answerJsx}</div>;
};

export default Answer;
