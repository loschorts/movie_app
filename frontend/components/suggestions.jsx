import React from 'react';

// A sometimes-visible component that shows Filter suggestions whenever a user
// has begun typing on a `Form` field. Clicking a suggestion auto-completes the
// field, triggering a new request for movie locations matching the now-complete
// field.

class Suggestions extends React.Component {
	constructor() {
		super();
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
			<li className="suggestion-item" key={`sug-${i}`} >
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
