import React from 'react';
import { connect } from 'react-redux';
import { requestLocations, setBounds, setQueryField, setDetail, requestSuggestions, clearSuggestions } from '../actions/locations';
import { locationsArray } from '../selectors';
import App from './app';

// This is the interface between the `store`, which holds application state, and the `App` component, which in turn serves as the main interface between its children and the `store`.

const mapState = state => ({
	locationsArray: locationsArray(state),
	locations: state.locations,
	detail: state.detail,
	bounds: state.bounds,
	queries: state.queries,
	suggestions: state.suggestions
});

const mapDispatch = dispatch => ({
	requestSuggestions: (field, value) => {dispatch(requestSuggestions(field, value))},
	requestLocations: () => { dispatch(requestLocations()) },
	setQueryField: (field, value) => {dispatch(setQueryField(field, value))},
	setBounds: bounds => { dispatch(setBounds(bounds))},
	setDetail: id => { dispatch(setDetail(id)) },
	clearSuggestions: () => { dispatch(clearSuggestions()) }
});

export default connect(mapState, mapDispatch)(App);
