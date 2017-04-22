export const activateNote = (noteId) => (dispatch, getState) => {
	dispatch({
		noteId,
		type: 'ACTIVATE_NOTE',
	});
};
