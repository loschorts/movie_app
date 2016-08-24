import React from 'react';

const IndexItem = ({location}) => {
	const details = Object.keys(location).map( key => (
		<li key={`item-detail-${id}-${key}`}>
			{key}: {location[key].toString()}
		</li>
	));

	return <ul className="index-item">{details}</ul>;
};

const Index = ({ locations }) => {
	console.log(locations);
	return (
		<div id="index">
			{
				locations.map( (loc, i) => (
					<IndexItem location={loc} key={`index-item-${i}`}/>
				))
			}
		</div>
	);
};


export default Index;