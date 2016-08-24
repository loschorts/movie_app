import { LocationConstants } from '../constants';
const { FETCH_LOCATIONS, RECEIVE_LOCATIONS, SET_DETAIL, SET_BOUNDS, SET_QUERIES} = LocationConstants;

export const fetchLocations = () => ({
	type: FETCH_LOCATIONS
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