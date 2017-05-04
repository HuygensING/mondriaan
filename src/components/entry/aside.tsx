import * as React from "react";
import ResizeBar from './resize-bar';
import styled from "styled-components";
import {inlineBlock} from "../constants";
import { Tab, Tabs } from 'hire-tabs';
import AsyncComponent from "src/components/async";
import edsNotesLoaders from './eds-notes-loaders';
import origNotesLoaders from './orig-notes-loaders';
import Facsimile from "src/components/entry/facsimile";

const Aside = styled.aside`
	${inlineBlock}
	background-color: #EEE;
	height: 100%;
	overflow: auto;
	position: relative;
	width: calc(100% - ${100 + 480 + 100 + 300}px);
`;

export default (props) =>
	<Aside id="entry-aside">
		<Tabs
			activeTab={props.activeTab}
		  onChange={(tabId) => props.activateTab(tabId)}
		>
			<Tab label="Facsimile">
				<Facsimile
					facsimile={props.facsimile}
				/>
			</Tab>
			{/*
			<Tab label="Eds Notes">
				<AsyncComponent
					activateNote={props.activateNote}
					activeNote={props.activeNote}
					load={edsNotesLoaders[props.match.params.id]}
				/>
			</Tab>
			<Tab label="Orig Notes">
				<AsyncComponent
					activateNote={props.activateNote}
					activeNote={props.activeNote}
					load={origNotesLoaders[props.match.params.id]}
				/>
			</Tab>
			*/}
		</Tabs>
		<ResizeBar />
	</Aside>;

