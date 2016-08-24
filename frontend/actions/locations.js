import { LocationConstants } from '../constants';
const { FETCH_LOCATIONS, RECEIVE_LOCATIONS } = LocationConstants;

export const fetchLocations = () => ({
	type: FETCH_LOCATIONS
});

export const receiveLocations = (locations) => ({
	type: RECEIVE_LOCATIONS,
	locations
});