import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'common/app';
import { BrowserRouter } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('container');
	ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>,
		container
	);
});
