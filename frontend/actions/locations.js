import { LocationConstants } from '../constants';
const { FETCH_LOCATIONS, RECEIVE_LOCATIONS } = LocationConstants;

export const fetchLocations = (queries = {}) => ({
	type: FETCH_LOCATIONS,
	queries
});

export const receiveLocations = (locations) => ({
	type: RECEIVE_LOCATIONS,
	locations
});