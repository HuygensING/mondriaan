const initialState = {
	query: '',
	requesting: false,
	result: {},
};

export default function (state = initialState, action) {
	let nextState = state;

	switch (action.type) {
		case 'SET_FULL_TEXT_QUERY': {
			nextState = {
				...nextState,
				...{ query: action.query },
			};
			break;
		}

		case 'REQUEST_FULL_TEXT_QUERY_RESULT': {
			nextState = {
				...nextState,
				...{ requesting: true },
			};
			break;
		}

		case 'RECEIVE_FULL_TEXT_QUERY_RESULT': {
			nextState = {
				...nextState,
				...{
					requesting: false,
					result: action.result,
				},
			};
			break;
		}

		default:
	}

	return nextState;
}
