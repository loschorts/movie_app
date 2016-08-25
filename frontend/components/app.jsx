import React from 'react';
import Index from './index';
import Form from './form';
import Detail from './detail';
import Map from './map';

// This is the main component. `App` is the primary container of the application
// and responsible for connecting most of its children to the application state.
// Note `Suggestions` also independently connects to the state in order to avoid
// unecessary prop-threading.

class App extends React.Component {
	componentDidMount(){
		this.props.requestLocations();
	}
	render(){
		const { queries, locationsArray, locations, detail, requestLocations, setBounds, setQueryField, setDetail, requestSuggestions, clearSuggestions } = this.props;
		return(
			<div id="app">
				<Form 
					queries={queries}
					setQueryField={setQueryField} 
					requestLocations={requestLocations}
					requestSuggestions={requestSuggestions}
					clearSuggestions={clearSuggestions}/>
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