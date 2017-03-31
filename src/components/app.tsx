import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './home';
import Entry from './entry';

export default () => (
	<div className="app">
		<Link to="/">Home</Link>
		<br />
		<Link to="/writing/schetsboek-2">Schetsboek 2</Link>
		<br />
		<Link to="/writing/bepaalde-en-onbepaalde">Bepaald en onbepaald</Link>
		<br />
		<Link to="/writing/nieuwe-beelding-in-schilderkunst">Nieuwe beelding in schilderkunst</Link>
		<br />
		<Route exact path="/" component={Home} />
		<Route path="/writing/:id" component={Entry} />
	</div>
);
