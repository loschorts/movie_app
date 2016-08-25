import { connect } from 'react-redux';
import Suggestions from './suggestions';

import { pickSuggestion } from '../actions/locations';

// This container exists because the `Suggestions` component needs to dispatch
// to the store to update application state, but cannot receive props from the
// `App`, the main `store` container, directly.

const mapState = state => ({
	suggestions: state.suggestions
});

const mapDispatch = dispatch => ({
	pickSuggestion: (field, suggestion) => {
		dispatch(pickSuggestion(field, suggestion));
	}
});

export default connect(mapState, mapDispatch)(Suggestions);
