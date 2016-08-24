import { LocationConstants } from '../constants';
const { REQUEST_LOCATIONS, SET_QUERY_FIELD, SET_BOUNDS } = LocationConstants;

import { receiveLocations, requestLocations } from '../actions/locations';
import { fetchLocations, handleError } from '../utils/locations_api_util';

import merge from 'lodash/merge';

const LocationsMiddleware = ({getState, dispatch}) => next => action => {
	switch(action.type){
		case SET_QUERY_FIELD:
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
			fetchLocations(queries, locationsReceived, handleError);
			return next(action);
		default:
			return next(action);
	}
};

export default LocationsMiddleware;