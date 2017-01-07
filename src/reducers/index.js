import { combineReducers } from 'redux';
import board from './boardReducer';
import searchInstantResults from './searchInstantResultsReducer';

const rootReducer = combineReducers({
	board,
	searchInstantResults
});

export default rootReducer;
