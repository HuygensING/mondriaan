import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import {Switch} from "react-router";

import About from './about';
import Entry from './entry';
import Header from "./header";
import Home from './home';
import Search from './search';

import store from '../store';
import history from '../store/history';
import styled from "styled-components";

const App = styled.div`
	height: 100%;
`;

export default () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App>
				<Header />
				<Route exact path="/" component={Home} />
				<Switch>
					<Route path="/writings/:id/line/:lineNumber/query/:query" component={Entry} />
					<Route path="/writings/:id/query/:query" component={Entry} />
					<Route path="/writings/:id/line/:lineNumber" component={Entry} />
					<Route path="/writings/:id" component={Entry} />
				</Switch>
				<Route path="/about" component={About} />
				<Route path="/search" component={Search} />
			</App>
		</ConnectedRouter>
	</Provider>
);
