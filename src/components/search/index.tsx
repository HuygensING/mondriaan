import * as React from 'react';
import Input from 'hire-forms-input';
import {setFullTextQuery} from 'src/actions/search';
import { connect } from 'react-redux';

const Search = (props) =>
	<div>
		<h2>Full text search</h2>
		<Input onChange={props.setFullTextQuery} value={props.query} />
		<ul>
			{
				Object.keys(props.result).map((id) =>
					<li key={id}>
						<h3>{id}</h3>
						<ul>
							{
								props.result[id]['body_t'].map((snippet, i) =>
									<li key={i} dangerouslySetInnerHTML={{ __html: snippet }} />
								)
							}
						</ul>
					</li>
				)
			}
		</ul>
	</div>;


export default connect(
	state => ({
		query: state.search.query,
		result: state.search.result,
	}),
	{
		setFullTextQuery,
	}
)(Search);
