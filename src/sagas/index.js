import { fork } from 'redux-saga/effects';
import api from '../services/API';
import nutritionixAutocomplete from './nutritionixAutocompleteSaga';

export default function* root() {
	yield fork(nutritionixAutocomplete(api).watcher);
}
