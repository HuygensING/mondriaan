import * as React from 'react';
import styled from 'styled-components';
import loaders from './loaders';

const Wrapper = styled.div`
	padding: 5% 10% 10% 10%;
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

class AsyncComponent extends React.Component<any, any> {
	public state = { mod: null };

	public componentWillMount() {
		this.load(this.props);
	}

	public componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps)
		}
	}

	private load(props) {
		this.setState({
			mod: null
		});

		props.load((mod) => {
			this.setState({mod: mod.default ? mod.default : mod})
		})
	}

	public render() {
		const Comp = this.state.mod;
		return Comp ? <Comp {...this.props} /> : null;
	}
}

const EntryText = styled.div`
	font-size: 18px;
	line-height: 36px;
	position: relative;
	width: 40%;
`;

// ToDo create a query (from search result) navigator
export default (props) =>
	<Wrapper>
		<EntryText>
			<AsyncComponent
				lineNumber={props.match.params.lineNumber}
				load={loaders[props.match.params.id]}
			  query={props.match.params.query}
			/>
		</EntryText>
		<Facsimile />
	</Wrapper>;
