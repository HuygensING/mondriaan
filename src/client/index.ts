import * as ReactDOM from 'react-dom';
import routes from '../common/routes';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('container');
	ReactDOM.render(routes, container);
});
