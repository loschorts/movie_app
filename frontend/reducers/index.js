import { combineReducers } from 'redux';
import { LocationConstants } from '../constants';
import normalize from '../utils/normalize';

const { RECEIVE_LOCATIONS } = LocationConstants;

import merge from 'lodash/merge';

const locations = (state = {}, action) => {
	console.log(action);
	switch (action.type) {

	case RECEIVE_LOCATIONS:
		return normalize(action.locations);
	default:
		return state;
	}
};

export default combineReducers({locations});