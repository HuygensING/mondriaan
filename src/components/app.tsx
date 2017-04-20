import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './home';
import Entry from './entry';
import Search from './search';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import store from '../store';
import history from '../store/history';
import {Switch} from "react-router";

export default () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div className="app">
				<header>
					<h1>Mondrian Papers</h1>
				</header>
				<Link to="/">Home</Link>
				<br />
				<Link to="/search">Search</Link>
				<br />
				<Link to="/writings/schetsboek-2">Schetsboek 2</Link>
				<br />
				<Link to="/writings/bepaalde-en-onbepaalde">Bepaald en onbepaald</Link>
				<br />
				<Link to="/writings/nieuwe-beelding-in-schilderkunst">Nieuwe beelding in schilderkunst</Link>
				<br />
				<Route exact path="/" component={Home} />
				<Switch>
					<Route path="/writings/:id/line/:lineNumber/query/:query" component={Entry} />
					<Route path="/writings/:id/query/:query" component={Entry} />
					<Route path="/writings/:id/line/:lineNumber" component={Entry} />
					<Route path="/writings/:id" component={Entry} />
				</Switch>
				<Route path="/search" component={Search} />
			</div>
		</ConnectedRouter>
	</Provider>
);
