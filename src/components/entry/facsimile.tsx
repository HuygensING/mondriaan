import * as React from 'react';
import styled from "styled-components";
declare const OpenSeadragon: any;

class Facsimile extends React.Component<any, any> {
	private osd;

	public componentDidMount() {
		this.osd = OpenSeadragon({
			id: "openseadragon",
			prefixUrl: "/node_modules/openseadragon/build/openseadragon/images/",
			showNavigator: true,
			navigatorPosition: 'BOTTOM_LEFT',
		});

		this.setFacsimile(this.props);
	}

	public componentWillReceiveProps(nextProps) {
		this.setFacsimile(nextProps);
	}

	public componentWillUnmount() {
		this.osd.destroy();
	}

	private setFacsimile(props) {
		if (props.facsimile != null && props.facsimile !== '') {
			this.osd.open(`/static/facsimiles/${props.facsimile}.dzi`)
		}
	}

	public render() {
		return (
			<div className={this.props.className} id="openseadragon" />
		);
	}
}

export default styled(Facsimile)`
	height: 100%;
`;
