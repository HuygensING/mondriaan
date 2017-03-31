import * as React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
	display: inline;
`;

// Linebreak
export const Lb = styled(Tag)`
	display: block;
	font-size: 16px;
`;

// No is short for "number". No is a child of <Lb>, so it
// really is: Linenumber, but because it is used so frequently
// byte size does matter in this case.
export const No = styled.span`
	color: gray;
	margin-left: -3em;
	margin-top: 2px;
	position: absolute;
	text-align: right;
	width: 2em;
`;

// Pagebreak
export const Pb = styled.div`
	background: #EEE;
	border: 1px solid #CCC;
	height: 50px;
	left: calc(-50px + -3em);
	position: absolute;
	width: 50px
`;

export const Del = styled.span`
	color: red;
	text-decoration: line-through;
`;

export const Add = styled.span`
	color: green;
	
	&:before {
		content: '+';	
	}
`;

// Incorrect reproduced text
export const Sic = styled(Tag)`
	border-bottom: 1px solid #AAA;
`;

// The correction of the Sic
export const Corr = styled(Tag)`
	border: 1px solid #AAA;
`;

// Highlighted (to add styling)
export const Hi = styled(Tag)`
	text-decoration: ${props => props['data-rend'] === 'underline' ? 'underline' : 'none'}
	vertical-align: ${props => props['data-rend'] === 'super' ? 'super' : 'baseline'}
`;

export const Unclear = styled(Tag)`
	color: #AAA;
	&:after { content: ']'; }
	&:before { content: '['; }
`;

export const Ab = Tag;
export const AddrLine = Tag;
export const Address = Tag;
export const Anchor = Tag;
export const Body = Tag;
export const C = Tag;
export const Choice = Tag;
export const Div = Tag;
export const Gap = Tag;
export const MdPostmark = Tag;
export const Note = Tag;
export const P = Tag;
export const Retrace = Tag;
export const Space = Tag;
export const Supplied = Tag;
