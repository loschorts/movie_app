import React from 'react';

class Suggestions extends React.Component {
	handleClick(e){
		e.preventDefault();
		const { field, pickSuggestion } = this.props;
		pickSuggestion(field, e.currentTarget.value);
	}
	render(){		
		const { suggestions } = this.props;
		const suggList = suggestions.map( sug => {
			<li>
				<a href="#" onClick={this.handleClick}>{sug}</a>
				</li>
		});

		return(
			<ul id="suggestions">
				HELLO
				{suggList}
			</ul>
		);	
	}
};

