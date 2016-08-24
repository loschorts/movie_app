import { LocationConstants } from '../constants';
const { REQUEST_LOCATIONS, SET_QUERIES, SET_BOUNDS } = LocationConstants;

import { receiveLocations, requestLocations } from '../actions/locations';
import { fetchLocations, handleError } from '../utils/locations_api_util';

import merge from 'lodash/merge';

const LocationsMiddleware = ({getState, dispatch}) => next => action => {
	switch(action.type){
		case SET_QUERIES:
		case SET_BOUNDS: 
			const result = next(action);
			dispatch(requestLocations());
			break;
		case REQUEST_LOCATIONS: 
			const locationsReceived = res => {
				dispatch(receiveLocations(res));
			};

			const state = getState();
			let queries = merge({}, state.bounds, state.queries);
			Object.keys(queries).forEach( k => {
				if (queries[k] === '' || !queries[k]) delete queries[k];
			});
			console.log(queries);
			fetchLocations(queries, locationsReceived, handleError);
			return next(action);
		default:
			return next(action);
	}
};

export default LocationsMiddleware;