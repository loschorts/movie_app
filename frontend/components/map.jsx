import React from 'react';

class Map extends React.Component {
	componentDidMount(){
		const { center, setBounds } = this.props;

		const MapOptions = {
		  center,
		  zoom: 15
		};

  	this.map = new google.maps.Map(this._ref, MapOptions);	

    this.map.addListener('idle', () => {
			setBounds(this.map.getBounds().toJSON());
    });
	 
	}
	render(){
		return (
			<div 
				ref={ c => {this._ref = c}} 
				id="map"
				style={{height: "500px", width: "500px"}}
			/>
		)
	}
};

export default Map;