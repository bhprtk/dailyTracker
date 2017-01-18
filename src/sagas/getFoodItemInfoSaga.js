import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import actions from '../actions/creators';

export default (api) => {

	function* worker(value) {
		const foodItemInfo = yield call(api.getFoodItemInfo, value)
		yield put(actions.receiveFoodItemInfo(foodItemInfo.foods[0]));
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.SELECT_FOOD_ITEM);
			const { foodItem } = input;
			yield call(worker, foodItem.food_name)
		}
	}

	return {
		watcher,
		worker
	}
}
