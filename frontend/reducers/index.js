import { combineReducers } from 'redux';
import { LocationConstants } from '../constants';
import normalize from '../utils/normalize';

const { RECEIVE_LOCATIONS, SET_DETAIL } = LocationConstants;

import merge from 'lodash/merge';

const locations = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_LOCATIONS:
			return normalize(action.locations);
		default:
			return state;
	}
};

const detail = (state = null, action) => {
	switch (action.type) {
		case RECEIVE_LOCATIONS: 
			return null;
		case SET_DETAIL: 
			return action.id;
		default:
			return state;
	}
};
const aA = Object.freeze({lat: 37.791305, lng: -122.3937352});

const center = (state = aA, action) => {
	return state;
}

export default combineReducers({locations, detail, center});