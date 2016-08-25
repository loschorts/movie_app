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
		const suggList = suggestions.map( (sug , i) => (
			<li key={`sug-${i}`} >
				<a href="#" onClick={this.handleClick}>{sug}</a>
				</li>
		));
		return(
			<ul id="suggestions">
				{suggList}
			</ul>
		);	
	}
};

export default Suggestions;
