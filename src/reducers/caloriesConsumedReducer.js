import { createReducer } from 'reduxsauce';
import types from '../actions/types';

export const INITIAL_STATE = {
	caloriesConsumed: 0
}

export const updateCaloriesConsumed = (state = INITIAL_STATE, action) => {
	const { calories } = action;
	const caloriesConsumed = state.caloriesConsumed + calories;
	return { ...state, caloriesConsumed };
}

const ACTION_HANDLERS = {
	[types.UPDATE_TODAYS_CALORIES]: updateCaloriesConsumed
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
