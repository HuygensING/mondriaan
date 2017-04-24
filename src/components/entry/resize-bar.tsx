import * as React from 'react';
import styled from "styled-components";

class ResizeBarComp extends React.Component<any, any> {
	private node: HTMLElement;
	private entryText: HTMLElement;
	private entryAside: HTMLElement;
	private clientWidth: number;

	public state = {
		drag: false,
	};

	public componentDidMount() {
		this.clientWidth = document.documentElement.clientWidth;

		this.entryText = document.getElementById('entry-text');
		this.entryAside = document.getElementById('entry-aside');

		document.addEventListener('mousemove', this.mouseMove);
		document.addEventListener('mouseup', this.mouseUp);
	}

	private mouseDown = () => {
		this.setUserSelect('none');
		this.setState({ drag: true })
	};

	private mouseMove = (ev) => {
		if (this.state.drag) {
			const perc = Math.round((ev.clientX / this.clientWidth) * 100);
			this.entryText.style.width = `${perc}%`;
			this.entryAside.style.width = `${100 - perc}%`;
		}
	};

	private mouseUp = () => {
		this.setUserSelect('auto');
		this.setState({ drag: false });
	};

	private setUserSelect(value: 'auto' | 'none') {
		document.body.style.userSelect = value;
		document.body.style.msUserSelect = value;
		document.body.style.webkitUserSelect = value;
	}

	public render() {
		return (
			<div
				className={this.props.className}
				onMouseDown={this.mouseDown}
			  ref={(node) => { this.node = node; }}
			>
			</div>
		)
	}
}

export default styled(ResizeBarComp)`
	width: 10px;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0);
	cursor: col-resize;
`;
