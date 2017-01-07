import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
	const store = createStore (
		rootReducer,
		initialState,
		applyMiddleware(
			// reduxImmutableStateInvariant()
			sagaMiddleware
		)
	);
	store.runSaga = sagaMiddleware.run(sagas);
	return store;
}
