export const activateNote = (note, top) => (dispatch, getState) =>
	dispatch({
		note,
		top,
		type: 'ACTIVATE_NOTE',
	});

export const activateTab = (tab) => (dispatch, getState) =>
	dispatch({
		tab,
		type: 'ACTIVATE_TAB',
	});

export const activateFacsimile = (facsimile) => (dispatch, getState) =>
	dispatch({
		facsimile,
		type: 'ACTIVATE_FACSIMILE',
	});
