import './Timer.css';
import { useEffect, useState } from 'react';

const Timer = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setTime(time + 1);
		}, 1000);
	}, [time]);

	return <div id='timer'>Time: {time}</div>;
};

export default Timer;
