import React from 'react';
import Index from './index';
import Form from './form';
import Detail from './detail';
import Map from './map';


class App extends React.Component {
	componentDidMount(){
		this.props.requestLocations();
	}
	render(){
		const { queries, locationsArray, locations, detail, requestLocations, setBounds, setQueryField, setDetail, requestSuggestions } = this.props;
		return(
			<div id="app">
				<Form 
					queries={queries}
					setQueryField={setQueryField} 
					requestLocations={requestLocations}
					requestSuggestions={requestSuggestions}/>
				<Index locations={locationsArray}/>
				<Detail detail={detail} locations={locations}/>
				<Map 
					detail={detail}
					locations={locations} 
					locationsArray={locationsArray} 
					setBounds={setBounds} 
					setDetail={setDetail}/>
			</div>
		);
	}
};

export default App;