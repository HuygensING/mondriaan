import * as React from 'react';
import Input from 'hire-forms-input';
import {setFullTextQuery} from 'src/actions/search';
import { connect } from 'react-redux';
import styled from "styled-components";
import { No } from 'mondrian-components';
import {Link} from "react-router-dom";

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const ListItem = styled.li`
	position: relative;
	padding-left: 4em;
	font-size: 18px;
	line-height: 36px;
`;

const Search = (props) =>
	<div>
		<h2>Full text search</h2>
		<Input onChange={props.setFullTextQuery} value={props.query} />
		<List>
			{
				Object.keys(props.result).map((id) =>
					<li key={id}>
						<h3>{id}</h3>
						<List>
							{
								props.result[id].map((line, i) =>
									<ListItem key={i}>
										<Link to={`/writing/${id}/line/${line.lineNumber}/query/${props.query}`}>
											<No>{line.lineNumber}</No>
											<span dangerouslySetInnerHTML={{ __html: line.text }} />
										</Link>
									</ListItem>
								)
							}
						</List>
					</li>
				)
			}
		</List>
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
