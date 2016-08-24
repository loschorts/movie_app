import React from 'react';
import { connect } from 'react-redux';
import { requestLocations, setBounds, setQueryField, setDetail } from '../actions/locations';
import { locationsArray } from '../selectors';
import App from './app';

const mapState = state => ({
	locationsArray: locationsArray(state),
	locations: state.locations,
	detail: state.detail,
	bounds: state.bounds
});

const mapDispatch = dispatch => ({
	requestLocations: () => { dispatch(requestLocations()) },
	setQueryField: (field, value) => {dispatch(setQueryField(field, value))},
	setBounds: bounds => { dispatch(setBounds(bounds))},
	setDetail: id => { dispatch(setDetail(id)) }
});

export default connect(mapState, mapDispatch)(App);
