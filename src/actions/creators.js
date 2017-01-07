import types from './types';

const nutritionixAutocomplete = (value) => ({
	type: types.NUTRITIONIX_AUTOCOMPLETE,
	value
});

const receiveSearchInstantResults = (results) => ({
	type: types.RECEIVE_SEARCH_INSTANT_RESULTS,
	results
})

export default {
	nutritionixAutocomplete,
	receiveSearchInstantResults
};
