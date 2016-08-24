import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import LocationsMiddleware from './middlewares/locations';
import createLogger from 'redux-logger'

export default () => createStore(
	reducer, 
	applyMiddleware(createLogger(), LocationsMiddleware)
);