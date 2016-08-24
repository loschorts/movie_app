import { connect } from 'react-redux';
import Suggestions from './suggestions';

import { pickSuggestion } from '../actions/locations';

const mapState = state => ({
	suggestions: state.suggestions
});

const mapDispatch = dispatch => ({
	pickSuggestion: (field, suggestion) => {
		dispatch(pickSuggestion(field, suggestion));
	}
});

export default connect(mapState, mapDispatch)(Suggestions);
