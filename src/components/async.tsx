import * as React from 'react';

export default class AsyncComponent extends React.Component<any, any> {
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
		console.log('mod', this.state.mod);
		console.log('loader', this.props.load);
		const Comp = this.state.mod;
		return Comp ? <Comp {...this.props} /> : null;
	}
}
