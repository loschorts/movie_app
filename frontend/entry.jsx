import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './configure_store';
import { Provider } from 'react-redux';

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<App/>
	</Provider>
);

document.addEventListener('DOMContentLoaded', ()=> {
	const root = document.querySelector('#root');
	ReactDOM.render(<Root/>, root);
});

