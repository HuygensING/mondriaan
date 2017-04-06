const getFullTextQueryResult = (query) => async (dispatch, getState) => {
	dispatch({ type: 'REQUEST_FULL_TEXT_QUERY_RESULT' });
	const solrSettings = `fl=id&indent=on&wt=json&omitHeader=true&rows=3000`;
	const solrHighlightSettings = `hl.method=unified&hl.fl=line_t&hl.snippets=1000&hl=on`;
	const solrQuery = `q=line_t:*${query}*`;
	const queryParams = `${solrSettings}&${solrHighlightSettings}&${solrQuery}`;
	const response = await fetch(`/full-text-search?${queryParams}`);
	const result = await response.json();
	const reduced = Object.keys(result.highlighting)
		.reduce((prev, curr) => {
			const [ id, no ] = curr.split('___');
			if (!prev.hasOwnProperty(id)) prev[id] = [];
			prev[id].push({
				lineNumber: no,
				text: result.highlighting[curr]['line_t'],
			});
			return prev;
		}, {});
	dispatch({
		type: 'RECEIVE_FULL_TEXT_QUERY_RESULT',
		result: reduced,
	});
};

export const setFullTextQuery = (query) => (dispatch, getState) => {
	dispatch({
		type: 'SET_FULL_TEXT_QUERY',
		query,
	});

	if (query.length > 2) {
		dispatch(getFullTextQueryResult(query));
	}
};