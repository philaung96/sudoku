import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import App from './Components/App';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
