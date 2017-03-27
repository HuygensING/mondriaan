import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {StaticRouter} from "react-router";
import App from "common/app";
import renderPage from './render-page';

import * as express from 'express';
const app = express();

app.use(express.static(process.cwd() + '/build/client'));

app.get('*', (req, res) => {
	const context = {};

	const html = ReactDOMServer.renderToString(
		<StaticRouter
			history={{}}
			location={req.url}
			context={context}
		>
			<App />
		</StaticRouter>
	);

  res.send(renderPage(html));
});

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));