import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main';

const store = configureStore();

const App = () => (
	<MuiThemeProvider>
		<Main />
	</MuiThemeProvider>
)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('react'));
