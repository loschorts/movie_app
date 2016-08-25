import React from 'react';

class Map extends React.Component {
	componentDidMount(){

		this.setupMap = this.setupMap.bind(this);
		this.updateMarkers = this.updateMarkers.bind(this);
		this.highlight = this.highlight.bind(this);

  	this.markers = {};
  	this.setupMap();
  	this.updateMarkers();
  	this.highlight();
	}

	componentDidUpdate() {
		this.updateMarkers();
		this.highlight();
	}

	setupMap(){
		const { setBounds } = this.props;

		const MapOptions = {
		  center: {lat: 37.78832052835358, lng: -122.43901088817137},
		  zoom: 12
		};

  	this.map = new google.maps.Map(this._ref, MapOptions);	
    this.map.addListener('idle', () => {
			setBounds(this.map.getBounds().toJSON());
    });
	}

  updateMarkers(){
		const { setBounds, locationsArray, locations, setDetail } = this.props;
		const component = this;

  	const _createMarker = (loc) => {
	    const pos = new google.maps.LatLng(loc.lat, loc.lng);
	    const marker = new google.maps.Marker({
	      position: pos,
	      map: this.map,
	      id: loc.id
	    });
	    marker.addListener('click', () => {
	    	component.props.setDetail(marker.id);
	    });
	    this.markers[marker.id] = marker;
	  };

	  // create new markers
  	locationsArray.forEach( loc => {
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
  	});

  }

  highlight(){
  	Object.keys(this.markers).forEach( id => {
  		this.markers[id].setIcon('http://maps.google.com/intl/en_us/mapfiles/ms/micons/red.png');
  	});
  	const {detail, locations} = this.props;
  	const loc = locations[detail];
  	if (loc && loc.mappable) {
  		this.markers[detail].setIcon('http://maps.google.com/intl/en_us/mapfiles/ms/micons/green.png');
  	}
  }

	render(){
		if (this.map) console.log(this.map.getCenter().toJSON());
		return (
			<div 
				ref={ c => {this._ref = c}} 
				id="map"
			/>
		)
	}
};

export default Map;