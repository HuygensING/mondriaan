import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/home';
import Entry from '../components/entry';

export default (
	<BrowserRouter>
		<div className="app">
			<Route exact path="/" component={Home} />
			<Route path="/entry" component={Entry} />
		</div>
	</BrowserRouter>
);
