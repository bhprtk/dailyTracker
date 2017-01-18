import { createReducer } from 'reduxsauce';
import types from '../actions/types';

export const INITIAL_STATE = {
	caloriesGoal: 0
}

export const setCaloriesGoal = (state = INITIAL_STATE, action) => {
	const { calories } = action;
	const caloriesGoal = calories;
	return { ...state, caloriesGoal };
}

export const resetCaloriesGoal = (state = INITIAL_STATE, action) => {
	return { state };
}

const ACTION_HANDLERS = {
	[types.SET_CALORIE_GOAL]: setCaloriesGoal,
	[types.RESET_CALORIES_GOAL]: resetCaloriesGoal
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
