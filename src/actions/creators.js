import types from './types';

const nutritionixAutocomplete = (value) => ({
	type: types.NUTRITIONIX_AUTOCOMPLETE,
	value
});

export default {
	nutritionixAutocomplete
};
