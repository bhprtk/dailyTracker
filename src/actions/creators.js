import types from './types';

const nutritionixAutocomplete = (value) => ({
	type: types.NUTRITIONIX_AUTOCOMPLETE,
	value
});

const receiveSearchInstantResults = (results) => ({
	type: types.RECEIVE_SEARCH_INSTANT_RESULTS,
	results
});

const selectFoodItem = (foodItem) => ({
	type: types.SELECT_FOOD_ITEM,
	foodItem
});

const removeSelectedFoodItem = () => ({
	type: types.REMOVE_SELECTED_FOOD_ITEM
});

export default {
	nutritionixAutocomplete,
	receiveSearchInstantResults,
	selectFoodItem,
	removeSelectedFoodItem
};
