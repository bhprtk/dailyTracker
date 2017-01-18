import { combineReducers } from 'redux';
import board from './boardReducer';
import caloriesConsumed from './caloriesConsumedReducer';
import searchInstantResults from './searchInstantResultsReducer';
import selectedFoodItem from './selectedFoodItemReducer';
import caloriesGoal from './caloriesGoalReducer';

const rootReducer = combineReducers({
	board,
	caloriesConsumed,
	caloriesGoal,
	selectedFoodItem,
	searchInstantResults
});

export default rootReducer;
