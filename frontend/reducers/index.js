import { combineReducers } from 'redux';
import { LocationConstants } from '../constants';
import normalize from '../utils/normalize';

import getLocationFromId from '../selectors';

const { RECEIVE_LOCATIONS, SET_DETAIL, SET_BOUNDS, SET_QUERY_FIELD, REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS, PICK_SUGGESTION } = LocationConstants;

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

const bounds = (state = {}, action) => {
	switch (action.type) {
		case SET_BOUNDS: 
			return merge({}, action.bounds);
		default: 
			return state;
	}

};

const queries = (state = {mappable: true}, action) => {
	switch (action.type) {
		case SET_QUERY_FIELD:
			return merge({}, state, {[action.field]: action.value});
		case PICK_SUGGESTION: 
			return merge({}, state, {[action.field]: action.value});
		default:
			return state;
	}
};

const suggestions = (state = [], action) => {
	switch (action.type) {
		case REQUEST_SUGGESTIONS:
			if (!action.value) return [];
			return state;
		case RECEIVE_SUGGESTIONS: 
			return [...action.suggestions];
		default: 
			return state;
	}
};

export default combineReducers({locations, detail, bounds, queries, suggestions});