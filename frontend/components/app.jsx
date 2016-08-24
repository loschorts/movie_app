import React from 'react';
import { connect } from 'react-redux';
import { locationsArray } from '../selectors';

import { fetchLocations } from '../actions/locations';

import Index from './index';

class App extends React.Component {
	componentDidMount(){
		this.props.fetchLocations();
	}
	render(){
		const { locations } = this.props;
		return(
			<Index locations={locations}/>
		);
	}
};

const mapState = state => ({
	locations: locationsArray(state)
});

const mapDispatch = dispatch => ({
	fetchLocations: () => { dispatch(fetchLocations()) }
});


export default connect(mapState, mapDispatch)(App);
