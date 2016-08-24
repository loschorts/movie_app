import React from 'react';

class Map extends React.Component {
	componentDidMount(){

		this.setupMap = this.setupMap.bind(this);
		this.updateMarkers = this.updateMarkers.bind(this);

  	this.markers = {};
  	this.setupMap();
  	this.updateMarkers();
	}

	setupMap(){
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

  updateMarkers(){
		const { setBounds, locationsArray, locations } = this.props;

  	const _createMarker = (loc) => {
	    const pos = new google.maps.LatLng(loc.lat, loc.lng);
	    const marker = new google.maps.Marker({
	      position: pos,
	      map: this.map,
	      id: loc.id
	    });
	    marker.addListener('click', () => {
	    	this.props.setDetail(marker.id);
	    });
	    this.markers[marker.id] = marker;
	  };

	  // create new markers
  	locationsArray.forEach(loc => {
  		if (loc.mappable && !this.markers[loc.id]) {
				_createMarker(loc);
  		} 
  	});

  	// remove old markers
  	Object.keys(this.markers).forEach( id => {
  		if (!locations[id]) {
  			this.markers[id].setMap(null);
  			delete this.markers[id];
  		}
  	})

  }

	componentDidUpdate() {
		this.updateMarkers();
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