import { LocationConstants } from '../constants';
const { REQUEST_LOCATIONS, RECEIVE_LOCATIONS, SET_DETAIL, SET_BOUNDS, SET_QUERIES} = LocationConstants;

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

export const setQueries = (queries) => ({
	type: SET_QUERIES,
	queries
});