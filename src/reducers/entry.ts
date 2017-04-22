const initialState = {
	activeNote: null,
};

export default function (state = initialState, action) {
	let nextState = state;

	switch (action.type) {
		case 'ACTIVATE_NOTE': {
			nextState = {
				...nextState,
				...{ activeNote: action.noteId },
			};
			break;
		}

		default:
	}

	return nextState;
}
