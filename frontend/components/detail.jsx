import React from 'react';

const Detail = ({ detail, locations }) => {
	if (!detail) {	
		return <p> click a list item for details </p>;
	}
	const location = locations[detail];
	const details = Object.keys(location).map( key => {
		if (location[key] === null || 
			typeof location[key] === 'undefined') return;
		return (
			<li key={`item-detail-${location.id}-${key}`}>
				{key}: {location[key].toString()}
			</li>
		);
	});

	return <ul className="detail">{details}</ul>;
};

export default Detail;