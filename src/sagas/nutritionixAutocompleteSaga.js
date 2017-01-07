import { take, call, put } from 'redux-saga/effects';
import types from '../actions/types';
import actions from '../actions/creators';

export default (api) => {

	function* worker(place) {
		const gymResults = yield call(api.nutritionixAutocomplete, place);
		// if(gymResults.status === 200) {
		// 	yield put(yelpActions.receiveGymResults(gymResults.data));
		// } else {
		// 	yield put(yelpActions.receiveGymResultsFailure(gymResults));
		// }
	}

	function* watcher() {
		while(true) {
			const input = yield take(types.NUTRITIONIX_AUTOCOMPLETE);
			console.log ('input:', input)
			// yield call(worker, input.place);
		}
	}

	return {
		watcher,
		worker
	};
};
