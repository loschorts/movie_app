import React from 'react';

class Suggestions extends React.Component {
	handleClick(e){
		e.preventDefault();
		const { field, pickSuggestion } = this.props;
		pickSuggestion(field, e.currentTarget.value);
	}
	render(){		
		const { suggestions } = this.props;
		console.log(this.props);
		const suggList = suggestions.map( sug => (
			<li>
				<a href="#" onClick={this.handleClick}>{sug}</a>
				</li>
		));

		console.log(suggList)
		return(
			<ul id="suggestions">
				{suggList}
			</ul>
		);	
	}
};

export default Suggestions;
