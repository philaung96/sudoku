import './Answer.css';

const Answer = (props) => {
	const answerJsx = [...Array(9)].map((e, index) => (
		<div className='tile' key={index}>
			<button type='submit' onClick={(e) => props.selectAnswer(e, index + 1)}>
				{index + 1}
			</button>
		</div>
	));
	return <div id='answers'>{answerJsx}</div>;
};

export default Answer;
