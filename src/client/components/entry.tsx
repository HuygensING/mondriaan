import * as React from 'react';
import styled from 'styled-components';
import Entry from 'common/entries/Schetsboek-2';

const Wrapper = styled.div`
	margin: auto;
	width: 640px;
`;

export default () =>
	<Wrapper>
		<Entry />
	</Wrapper>;
