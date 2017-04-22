import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import loaders from './loaders';
import {activateNote} from "src/actions/entry";

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
	width: 40%;
`;

// ToDo create a query (from search result) navigator
const Entry = (props) =>
	<Wrapper>
		<EntryText>
			<AsyncComponent
				activateNote={props.activateNote}
				activeNote={props.activeNote}
				lineNumber={props.match.params.lineNumber}
				load={loaders[props.match.params.id]}
			  query={props.match.params.query}
			/>
		</EntryText>
		<Facsimile />
	</Wrapper>;

export default connect(
	state => ({
		activeNote: state.entry.noteId,
	}),
	{
		activateNote,
	}
)(Entry);
