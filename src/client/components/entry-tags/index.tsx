import * as React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
	display: inline;
	line-height: 1.5em;
`;

export const Linenumber = styled.span`
	color: gray;
	margin-left: -3em;
	position: absolute;
	text-align: right;
	width: 2em;
`;

import Lb from './lb';
export { Lb };

export const Ab = (props) => <Tag className="ab">{props.children}</Tag>;
export const Add = (props) => <Tag className="add">{props.children}</Tag>;
export const AddrLine = (props) => <Tag className="addrline">{props.children}</Tag>;
export const Address = (props) => <Tag className="address">{props.children}</Tag>;
export const Anchor = (props) => <Tag className="anchor">{props.children}</Tag>;
export const Body = (props) => <Tag className="body">{props.children}</Tag>;
export const C = (props) => <Tag className="c">{props.children}</Tag>;
export const Choice = (props) => <Tag className="choice">{props.children}</Tag>;
export const Corr = (props) => <Tag className="corr">{props.children}</Tag>;
export const Del = (props) => <Tag className="del">{props.children}</Tag>;
export const Div = (props) => <Tag className="div">{props.children}</Tag>;
export const Gap = (props) => <Tag className="gap">{props.children}</Tag>;
export const Hi = (props) => <Tag className="hi">{props.children}</Tag>;
export const MdPostmark = (props) => <Tag className="mdpostmark">{props.children}</Tag>;
export const Note = (props) => <Tag className="note">{props.children}</Tag>;
export const P = (props) => <Tag className="p">{props.children}</Tag>;
export const Pb = (props) => <Tag className="pb">{props.children}</Tag>;
export const Retrace = (props) => <Tag className="retrace">{props.children}</Tag>;
export const Sic = (props) => <Tag className="sic">{props.children}</Tag>;
export const Space = (props) => <Tag className="space">{props.children}</Tag>;
export const Supplied = (props) => <Tag className="supplied">{props.children}</Tag>;
export const Unclear = (props) => <Tag className="unclear">{props.children}</Tag>;
