import React from 'react';
import { connect } from 'react-redux';
import { locationsArray } from '../selectors';

import { fetchLocations } from '../actions/locations';

import Index from './index';
import Form from './form';
import Detail from './detail';

class App extends React.Component {
	componentDidMount(){
		this.props.fetchLocations();
	}
	render(){
		const { locationsArray, locations, detail, fetchLocations } = this.props;
		return(
			<div id="app">
				<Form fetchLocations={fetchLocations}/>
				<Index locations={locationsArray}/>
				<Detail detail={detail} locations={locations}/>
			</div>
		);
	}
};

const mapState = state => ({
	locationsArray: locationsArray(state),
	locations: state.locations,
	detail: state.detail
});

const mapDispatch = dispatch => ({
	fetchLocations: (params) => { dispatch(fetchLocations(params)) }
});


export default connect(mapState, mapDispatch)(App);
