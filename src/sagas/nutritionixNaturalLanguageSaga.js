import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import actions from '../actions/creators';

export default (api) => {

	function* worker(query) {
		const results = yield call(api.getFoodItemInfo, query);
		yield put(actions.receiveFoodItemInfo(results.foods[0]));
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.NUTRITIONIX_NATURAL_LANGUAGE);
			yield call(worker, input.query);
		}
	}

	return {
		watcher,
		worker
	};
};
