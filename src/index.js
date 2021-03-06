import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

/* bootstrap css */
import './app/assets/css/bootstrap.min.css';
/* style css */
import './app/assets/css/style.css';
/* Responsive */
import './app/assets/css/responsive.css';
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
