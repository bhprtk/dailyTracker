import { createReducer } from 'reduxsauce';
import types from '../actions/types';

export const INITIAL_STATE = {
	selectedFoodItem: null
}

export const selectFoodItem = (state = INITIAL_STATE, action) => {
	const { foodItem } = action;
	const selectedFoodItem = foodItem;
	return { ...state, selectedFoodItem }
}

export const removeSelectedFoodItem = (state = INITIAL_STATE, action) => {
	return { state };
}

export const receiveFoodItemInfo = (state = INITIAL_STATE, action) => {
	const { food } = action;
	const selectedFoodItem = food;
	return { ...state, selectedFoodItem };
}

const ACTION_HANDLERS = {
	[types.SELECT_FOOD_ITEM]: selectFoodItem,
	[types.REMOVE_SELECTED_FOOD_ITEM]: removeSelectedFoodItem,
	[types.RECEIVE_FOOD_ITEM_INFO]: receiveFoodItemInfo
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
