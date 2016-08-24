import React from 'react';
import IndexItem from './index_item';

const Index = ({ locations }) => {
	return (
		<ul id="index">
			{
				locations.map( (loc, i) => (
					<IndexItem location={loc} key={`index-item-${i}`}/>
				))
			}
		</ul>
	);
};


export default Index;