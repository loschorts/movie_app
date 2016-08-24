import { LocationConstants } from '../constants';
const { FETCH_LOCATIONS, RECEIVE_LOCATIONS, SET_DETAIL, SET_BOUNDS } = LocationConstants;

export const fetchLocations = (queries = {}) => ({
	type: FETCH_LOCATIONS,
	queries
});

export const receiveLocations = (locations) => ({
	type: RECEIVE_LOCATIONS,
	locations
});

export const setDetail = (id) => ({
	type: SET_DETAIL,
	id
})

export const setBounds = (bounds) => ({
	type: SET_BOUNDS,
	bounds
})