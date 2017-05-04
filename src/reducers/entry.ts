const initialState = {
	activeNote: null,
	noteTop: null,
	activeTab: 'Facsimile',
	facsimile: null,
};

export default function (state = initialState, action) {
	let nextState = state;

	switch (action.type) {
		case 'ACTIVATE_NOTE': {
			nextState = {
				...nextState,
				...{
					activeNote: action.note,
					noteTop: action.top,
				},
			};
			break;
		}

		case 'ACTIVATE_TAB': {
			nextState = {
				...nextState,
				...{ activeTab: action.tab },
			};
			break;
		}

		case 'ACTIVATE_FACSIMILE': {
			nextState = {
				...nextState,
				...{
					activeTab: 'Facsimile',
					facsimile: action.facsimile,
				}
			};
			break;
		}

		default:
	}

	return nextState;
}
