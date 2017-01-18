import types from './types';

const nutritionixAutocomplete = (value) => ({
	type: types.NUTRITIONIX_AUTOCOMPLETE,
	value
});

const nutritionixNaturalLanguage = (query) => ({
	type: types.NUTRITIONIX_NATURAL_LANGUAGE,
	query
});

const receiveSearchInstantResults = (results) => ({
	type: types.RECEIVE_SEARCH_INSTANT_RESULTS,
	results
});

const selectFoodItem = (foodItem) => ({
	type: types.SELECT_FOOD_ITEM,
	foodItem
});

const receiveFoodItemInfo = (food) => ({
	type: types.RECEIVE_FOOD_ITEM_INFO,
	food
});

const removeSelectedFoodItem = () => ({
	type: types.REMOVE_SELECTED_FOOD_ITEM
});

const resetCaloriesGoal = () => ({
	type: types.RESET_CALORIES_GOAL
});

const setCalorieGoal = (calories) => ({
	type: types.SET_CALORIE_GOAL,
	calories
})

const updateTodaysCalories = (calories) => ({
	type: types.UPDATE_TODAYS_CALORIES,
	calories
});

export default {
	nutritionixAutocomplete,
	nutritionixNaturalLanguage,
	receiveSearchInstantResults,
	selectFoodItem,
	receiveFoodItemInfo,
	removeSelectedFoodItem,
	resetCaloriesGoal,
	setCalorieGoal,
	updateTodaysCalories
};
