import Immutable from 'immutable';

export const saveStateToLocalstorage = state => {
	return window.localStorage.setItem('appState', JSON.stringify(state.toJS()));
};

export const parseStateFromLocalStorage = () => {
	var parsedData,
		initialData = {
			questionnaires: {},
			questions: {},
			answers: {}
		};
	try {
		parsedData = JSON.parse(window.localStorage.getItem('appState'));
	} catch (e) {
		parsedData = initialData;
	}
	parsedData = Object.assign({}, initialData, parsedData);

	return Immutable.fromJS(parsedData);
};
