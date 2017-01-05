import { createReducer } from 'reduxsauce';

import types from '../actions/types';

export const INITIAL_STATE = {board: [
	['', '', ''],
	['', '', ''],
	['', '', '']
]}

export const updateBoard = (state = INITIAL_STATE, action) => {
	const { board } = action;
	return { ...state, board };
}

const ACTION_HANDLERS = {
	[types.UPDATE_BOARD]: updateBoard
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
