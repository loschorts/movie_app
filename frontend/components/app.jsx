import React from 'react';
import { connect } from 'react-redux';
import { locationsArray } from '../selectors';

import { fetchLocations } from '../actions/locations';

import Index from './index';
import Form from './form';

class App extends React.Component {
	componentDidMount(){
		this.props.fetchLocations();
	}
	render(){
		const { locations, fetchLocations } = this.props;
		return(
			<div id="app">
				<Form fetchLocations={fetchLocations}/>
				<Index locations={locations}/>
			</div>
		);
	}
};

const mapState = state => ({
	locations: locationsArray(state)
});

const mapDispatch = dispatch => ({
	fetchLocations: (params) => { dispatch(fetchLocations(params)) }
});


export default connect(mapState, mapDispatch)(App);
