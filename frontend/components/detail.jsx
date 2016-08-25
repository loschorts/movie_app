import React from 'react';

const Detail = ({ detail, locations }) => {
	let details;
	if (!detail) {	
		details = <p> click a list item or marker for details </p>;
	} else {		
		const location = locations[detail];
		details = Object.keys(location).map( key => {
			if (location[key] === null || 
				typeof location[key] === 'undefined') return;
			return (
				<li 
					className="detail-item"
					key={`item-detail-${location.id}-${key}`}>
					{key}: {location[key].toString()}
				</li>
			);
		});
	}

	return (
		<div id="detail-list">
			<h4>Detail Pane</h4>
			{details}
		</div>
		);
};

export default Detail;