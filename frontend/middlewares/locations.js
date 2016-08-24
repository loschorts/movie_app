import { LocationConstants } from '../constants';
const { FETCH_LOCATIONS } = LocationConstants;

import { receiveLocations } from '../actions/locations';
import { fetchLocations, handleError } from '../utils/locations_api_util';

const LocationsMiddleware = ({getState, dispatch}) => next => action => {
	switch(action.type){
		case FETCH_LOCATIONS: 
			const queries = {};
			const locationsReceived = res => {
				dispatch(receiveLocations(res));
			};
			fetchLocations(queries, locationsReceived, handleError);
			return next(action);
		default:
			return next(action);
	}
};

export default LocationsMiddleware;