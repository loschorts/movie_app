import React from 'react';
import { connect } from 'react-redux';
import { locationsArray } from '../selectors';

import { requestLocations, setBounds, setQueryField } from '../actions/locations';

import Index from './index';
import Form from './form';
import Detail from './detail';
import Map from './map';

class App extends React.Component {
	componentDidMount(){
		this.props.requestLocations();
	}
	render(){
		const { locationsArray, locations, detail, center, requestLocations, setBounds, setQueryField } = this.props;
		return(
			<div id="app">
				<Form setQueryField={setQueryField} 
					requestLocations={requestLocations}/>
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
	requestLocations: () => { dispatch(requestLocations()) },
	setQueryField: (field, value) => {dispatch(setQueryField(field, value))},
	setBounds: (bounds) => { dispatch(setBounds(bounds))}
});


export default connect(mapState, mapDispatch)(App);
