const getFullTextQueryResult = (query) => async (dispatch, getState) => {
	dispatch({ type: 'REQUEST_FULL_TEXT_QUERY_RESULT' });
	const solrSettings = `fl=id&indent=on&wt=json&omitHeader=true`;
	const solrHighlightSettings = `hl.method=unified&hl.fl=body_t&hl.snippets=1000&hl=on`;
	const solrQuery = `q=body_t:*${query}*`;
	const queryParams = `${solrSettings}&${solrHighlightSettings}&${solrQuery}`;
	const response = await fetch(`/full-text-search?${queryParams}`);
	const result = await response.json();
	console.log(result);
	dispatch({
		type: 'RECEIVE_FULL_TEXT_QUERY_RESULT',
		result: result.highlighting,
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