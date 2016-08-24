import React from 'react';

class Suggestions extends React.Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		e.preventDefault();
		const { field, pickSuggestion } = this.props;
		pickSuggestion(field, e.currentTarget.innerHTML);
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
