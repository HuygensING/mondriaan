import * as React from 'react';
import {Link} from "react-router-dom";

export default () =>
	<div>
		<Link to="/search">Search</Link><br />
		<Link to="/writings/schetsboek-1">Schetsboek 1</Link><br />
		<Link to="/writings/schetsboek-2">Schetsboek 2</Link><br />
		<Link to="/writings/bepaalde-en-onbepaalde">Bepaald en onbepaald</Link><br />
		<Link to="/writings/nieuwe-beelding-in-schilderkunst">Nieuwe beelding in schilderkunst</Link>
	</div>;
