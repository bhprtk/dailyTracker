import { combineReducers } from 'redux';
import board from './boardReducer';
import searchInstantResults from './searchInstantResultsReducer';
import selectedFoodItem from './selectedFoodItemReducer';

const rootReducer = combineReducers({
	board,
	searchInstantResults,
	selectedFoodItem
});

export default rootReducer;
