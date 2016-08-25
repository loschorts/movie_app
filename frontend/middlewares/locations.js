import { LocationConstants } from '../constants';
const { REQUEST_LOCATIONS, SET_QUERY_FIELD, SET_BOUNDS, REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS, PICK_SUGGESTION } = LocationConstants;

import { receiveLocations, requestLocations, requestSuggestions, receiveSuggestions } from '../actions/locations';
import { fetchLocations, handleError, fetchSuggestions } from '../utils/locations_api_util';

import merge from 'lodash/merge';

// This middleware handles application dispatches which require API interaction. The middleware requests Movie Locations from the API whenever filter fields are changed (including when auto-complete suggestions are picked) or the map is moved. It is also responsible for triggering API requests whenever a filter field is changed to obtain new search suggestions.

const LocationsMiddleware = ({getState, dispatch}) => next => action => {
	switch(action.type){
		case REQUEST_SUGGESTIONS: 
			if (!action.value) return next(action);
			const success = res => {
				dispatch(receiveSuggestions(res));
			}
			// fetches suggestions whenever a filter field is updated
			fetchSuggestions(action.field, action.value, success);
			return next(action);
		case PICK_SUGGESTION:
		case SET_QUERY_FIELD:
		case SET_BOUNDS: 
			const result = next(action);
			dispatch(requestLocations());
			break;
		case REQUEST_LOCATIONS: 
			const locationsReceived = res => dispatch(receiveLocations(res));

			// assembles the query params from the state
			const state = getState();
			let queries = merge({}, state.bounds, state.queries);
			Object.keys(queries).forEach( k => {
				if (queries[k] === '' || !queries[k]) delete queries[k];
			});

			// fetches movie locations
			fetchLocations(queries, locationsReceived, handleError);
			return next(action);
		default:
			return next(action);
	}
};

export default LocationsMiddleware;