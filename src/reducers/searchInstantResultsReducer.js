import { createReducer } from 'reduxsauce';

import types from '../actions/types';

export const INITIAL_STATE = {
	searchInstantResults: {}
}

export const receiveSearchInstantResults = (state = INITIAL_STATE, action) => {
	const { results } = action;
	const searchInstantResults = results.data;
	return { ...state, searchInstantResults };
}

const ACTION_HANDLERS = {
	[types.RECEIVE_SEARCH_INSTANT_RESULTS]: receiveSearchInstantResults
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
