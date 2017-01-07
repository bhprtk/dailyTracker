import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import actions from '../actions/creators';

export default (api) => {

	function* worker(value) {
		const searchInstantResults = yield call(api.nutritionixAutocomplete, value);
		yield put(actions.receiveSearchInstantResults(searchInstantResults));
		// if(gymResults.status === 200) {
		// 	yield put(yelpActions.receiveGymResults(gymResults.data));
		// } else {
		// 	yield put(yelpActions.receiveGymResultsFailure(gymResults));
		// }
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.NUTRITIONIX_AUTOCOMPLETE);
			yield call(worker, input.value);
		}
	}

	return {
		watcher,
		worker
	};
};
