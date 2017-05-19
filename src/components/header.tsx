import * as React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {inlineBlock, mainHeaderHeight, primeColor, primeColorDark} from "src/components/constants";

const Header = styled.header`
	background-color: ${primeColor};
	height: ${mainHeaderHeight};
`;

const H1 = styled.h1`
	${inlineBlock}
	height: 100%;
	margin: 0;
	text-align: center;
	width: 50%;

	a {
		${inlineBlock}
		color: orange;
		height: 66.66%;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	img {
		display: block;
		height: 100%;
	}
`;

const Nav = styled.nav`
	${inlineBlock}
	font-size: 1.2em;
	line-height: ${mainHeaderHeight};
	width: 50%;

	> ul {
		list-style: none;
		margin: 0;
		padding: 0;
		text-align: center;
	}

	> ul > li {
		${inlineBlock}
		color: ${primeColorDark};
		max-width: 100px;
		width: 33.33%
	}

	> ul > li > a {
		color: inherit;
		text-decoration: none;
	}
`;

export default (props) =>
	<Header>
		<H1>
			<Link to="/">
				<img
					alt="The Mondrian Papers"
					src="/static/images/logo-mondrian-papers-long.svg"
				/>
			</Link>
		</H1>
		<Nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li>Edition</li>
				<li><Link to="/about">About</Link></li>
			</ul>
		</Nav>
	</Header>;
