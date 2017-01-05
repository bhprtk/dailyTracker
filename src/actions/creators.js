import types from './types';

const updateBoard = (board) => ({
	type: types.UPDATE_BOARD,
	board
});

export default {
	updateBoard
};
