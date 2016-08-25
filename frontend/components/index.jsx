import React from 'react';
import IndexItem from './index_item';

const Index = ({ locations }) => {
	return (
		<div id="index">
			<h4>Index</h4>
			{
				locations.map( (loc, i) => (
					<IndexItem location={loc} key={`index-item-${i}`}/>
				))
			}
		</div>
	);
};


export default Index;