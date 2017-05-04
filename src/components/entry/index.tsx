import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import loaders from './loaders';
import Aside from './aside';
import {activateFacsimile, activateNote, activateTab} from "src/actions/entry";
import {inlineBlock, mainHeaderHeight} from "src/components/constants";
import AsyncComponent from "src/components/async";
import edsNotesLoaders from './eds-notes-loaders';

const Entry = styled.div`
	height: calc(100% - ${mainHeaderHeight});
`;

const Text = styled.article`
	${inlineBlock}
	height: 100%;
	overflow-y: auto;
	padding: 100px 100px 200px 100px;
	width: ${100 + 480 + 300 + 100}px;
`;


// ToDo create a query (from search result) navigator
const EntryComp = (props) =>
	<Entry>
		<Text id="entry-text">
			<AsyncComponent
				activateFacsimile={props.activateFacsimile}
				activateNote={props.activateNote}
				activeNote={props.activeNote}
				noteTop={props.noteTop}
				lineNumber={props.match.params.lineNumber}
				load={loaders[props.match.params.id]}
			  query={props.match.params.query}
			/>
		</Text>
		<Aside {...props} />
	</Entry>;

export default connect(
	state => ({
		activeNote: state.entry.activeNote,
		noteTop: state.entry.noteTop,
		activeTab: state.entry.activeTab,
		facsimile: state.entry.facsimile,
	}),
	{
		activateFacsimile,
		activateNote,
		activateTab,
	}
)(EntryComp);
