import { LocationConstants } from '../constants';
const { FETCH_LOCATIONS, SET_QUERIES, SET_BOUNDS } = LocationConstants;

import { receiveLocations } from '../actions/locations';
import { fetchLocations, handleError } from '../utils/locations_api_util';

import merge from 'lodash/merge';

const LocationsMiddleware = ({getState, dispatch}) => next => action => {
	switch(action.type){
		case SET_QUERIES:
		case SET_BOUNDS: 
			const result = next(action);
		case FETCH_LOCATIONS: 
			const locationsReceived = res => {
				dispatch(receiveLocations(res));
			};
			const state = getState();
			const queries = merge({}, state.bounds, state.queries);
			fetchLocations(queries, locationsReceived, handleError);
			return next(action);
		default:
			return next(action);
	}
};

export default LocationsMiddleware;