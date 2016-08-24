import { LocationConstants } from '../constants';
const { RECEIVE_LOCATIONS } = LocationConstants;

import merge from 'lodash/merge';

const reducer = (state = {}, action) => {
	switch (action.type) {
		case RECEIVE_LOCATIONS:
		break;
	}
	return state;
};

export default reducer;