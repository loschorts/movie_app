import React from 'react';

class Map extends React.Component {
	componentDidMount(){
		const { center, setBounds, locations } = this.props;

		this.setupMap = this.setupMap.bind(this);
		this.handleMarkers = this.handleMarkers.bind(this);

  	this.markers = {};
  	this.setupMap();
  	this.handleMarkers();
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

  handleMarkers(){
		const { setBounds, locations } = this.props;

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
	  }

  	locations.forEach(loc => {
  		if (loc.mappable) {
  			_createMarker(loc);
  		}
  	});

  }

	componentDidUpdate() {
		this.handleMarkers();
	}

	render(){
		console.log(this.markers)
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