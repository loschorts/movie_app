import React from 'react'

Suggestions = ({ suggestions, pickSuggestion }) => {

	const suggList = suggestions.map( sug => {
		<li onClick={pickSuggestion(sug)}>{sug}</li>
	});

	return(
		<ul id="suggestions">
			{suggList}
		</ul>
	);
}