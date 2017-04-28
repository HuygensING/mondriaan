export const activateNote = (noteId) => (dispatch, getState) =>
	dispatch({
		noteId,
		type: 'ACTIVATE_NOTE',
	});

export const activateTab = (tabId) => (dispatch, getState) =>
	dispatch({
		tabId,
		type: 'ACTIVATE_TAB',
	});

export const activateFacsimile = (facsimile) => (dispatch, getState) =>
	dispatch({
		facsimile,
		type: 'ACTIVATE_FACSIMILE',
	});
