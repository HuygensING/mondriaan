import * as React from 'react';
import styled from 'styled-components';
const loadSchetsboek1 = require('bundle-loader?lazy!common/entries/Schetsboek-2');
const loadNbis = require('bundle-loader?lazy!common/entries/1917_NieuweBeeldingInSchilderkunst_STIJL');
const loadBeo = require('bundle-loader?lazy!common/entries/1918_BepaaldeEnOnbepaalde_STIJL');

const entryLoaders = {
	'schetsboek-1': loadSchetsboek1,
	'nieuwe-beelding-in-schilderkunst': loadNbis,
	'bepaalde-en-onbepaalde': loadBeo,
}
const Wrapper = styled.div`
	padding: 5% 10% 10% 10%;
`;

const EntryText = styled.div`
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
		return Comp ? <Comp /> : null;
	}
}

export default (props) =>
	<Wrapper>
		<EntryText>
			<AsyncComponent load={entryLoaders[props.match.params.id]} />
		</EntryText>
		<Facsimile />
	</Wrapper>;
