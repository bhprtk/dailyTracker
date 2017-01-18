import { fork } from 'redux-saga/effects';
import api from '../services/API';
import nutritionixAutocomplete from './nutritionixAutocompleteSaga';
import nutritionixNaturalLanguage from './nutritionixNaturalLanguageSaga';
import getFoodItemInfo from './getFoodItemInfoSaga';

export default function* root() {
	yield fork(getFoodItemInfo(api).watcher);
	yield fork(nutritionixAutocomplete(api).watcher);
	yield fork(nutritionixNaturalLanguage(api).watcher);
}
