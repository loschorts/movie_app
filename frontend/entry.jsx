import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app_container';
import configureStore from './configure_store';
import { Provider } from 'react-redux';

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<AppContainer/>
	</Provider>
);

document.addEventListener('DOMContentLoaded', ()=> {
	const root = document.querySelector('#root');
	ReactDOM.render(<Root/>, root);
});

