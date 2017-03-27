import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from '../client/components/home';
import Entry from '../client/components/entry';

export default () => (
	<div className="app">
		<Link to="/">Home</Link>
		<br />
		<Link to="/entry">Entry</Link>
		<Route exact path="/" component={Home} />
		<Route path="/entry" component={Entry} />
	</div>
);
