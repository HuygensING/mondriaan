import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ResizeBar from './resize-bar';
import loaders from './loaders';
import {activateNote} from "src/actions/entry";
import {inlineBlock, mainHeaderHeight} from "src/components/constants";

const Entry = styled.div`
	height: calc(100% - ${mainHeaderHeight});
`;

const Text = styled.div`
	${inlineBlock}
	height: 100%;
	overflow-y: auto;
	padding: 2em 100px 10em 4em;
	// width: calc(4em + 480px + 100px);
	width: 50%;
`;

const Aside = styled.aside`
	${inlineBlock}
	height: 100%;
	position: relative;
	// width: calc(100% - (4em + 480px + 100px));
	width: 50%;
`;

const Facsimile = styled.div`
	background: #EEE;
	border: 1px solid #CCC;
	box-sizing: border-box;
	height: 100%;
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


// ToDo create a query (from search result) navigator
const EntryComp = (props) =>
	<Entry>
		<Text id="entry-text">
			<AsyncComponent
				activateNote={props.activateNote}
				activeNote={props.activeNote}
				lineNumber={props.match.params.lineNumber}
				load={loaders[props.match.params.id]}
			  query={props.match.params.query}
			/>
		</Text>
		<Aside id="entry-aside">
			<ResizeBar />
			<Facsimile />
		</Aside>
	</Entry>;

export default connect(
	state => ({
		activeNote: state.entry.noteId,
	}),
	{
		activateNote,
	}
)(EntryComp);
