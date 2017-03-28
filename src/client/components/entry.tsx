import * as React from 'react';
import styled from 'styled-components';
import Schetsboek from 'common/entries/Schetsboek-2';

const Wrapper = styled.div`
	padding: 5% 10% 10% 10%;
`;

const EntryText = styled.div`
	margin-left: 10%;
	margin-right: 50%;
	position: relative;
	width: 40%;
`;

const Facsimile = styled.div`
	background: #EEE;
	border: 1px solid #CCC;
	bottom: 5%
	position: fixed;
	right: 10%
	top: 5%;
	width: 40%;
`;

export default () =>
	<Wrapper>
		<EntryText>
			<Schetsboek />
		</EntryText>
		<Facsimile />
	</Wrapper>;
