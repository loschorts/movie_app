import React from 'react';
import { connect } from 'react-redux';
import { locationsArray } from '../selectors';

import { fetchLocations, setBounds } from '../actions/locations';

import Index from './index';
import Form from './form';
import Detail from './detail';
import Map from './map';

class App extends React.Component {
	componentDidMount(){
		this.props.fetchLocations();
	}
	render(){
		const { locationsArray, locations, detail, center, fetchLocations, setBounds } = this.props;
		return(
			<div id="app">
				<Form fetchLocations={fetchLocations}/>
				<Index locations={locationsArray}/>
				<Detail detail={detail} locations={locations}/>
				<Map center={center} setBounds={setBounds}/>
			</div>
		);
	}
};

const mapState = state => ({
	locationsArray: locationsArray(state),
	locations: state.locations,
	detail: state.detail,
	center: state.center,
	bounds: state.bounds
});

const mapDispatch = dispatch => ({
	fetchLocations: (params) => { dispatch(fetchLocations(params)) },
	setBounds: (bounds) => { dispatch(setBounds(bounds))}
});


export default connect(mapState, mapDispatch)(App);
