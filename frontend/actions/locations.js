import { LocationConstants } from '../constants';
const { REQUEST_LOCATIONS, RECEIVE_LOCATIONS, SET_DETAIL, SET_BOUNDS, SET_QUERY_FIELD, REQUEST_SUGGESTIONS } = LocationConstants;

export const requestLocations = () => ({
	type: REQUEST_LOCATIONS
});

export const receiveLocations = (locations) => ({
	type: RECEIVE_LOCATIONS,
	locations
});

export const setDetail = (id) => ({
	type: SET_DETAIL,
	id
});

export const setBounds = (bounds) => ({
	type: SET_BOUNDS,
	bounds
});

export const setQueryField = (field, value) => ({
	type: SET_QUERY_FIELD,
	field,
	value
});

export const pickSuggestion = (field, value) => ({
	type: PICK_SUGGESTION,
	field,
	value
});

export const requestSuggestions = (field, value) => ({
	type: REQUEST_SUGGESTIONS,
	field,
	value
});
