import React from 'react';
import merge from 'lodash/merge';

import SuggestionsContainer from './suggestions_container';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.fields = [ 
			'actor_1',
			'actor_2',
			'actor_3',
			'director',
			'locations',
			'production_company',
			'release_year',
			'title',
			'writer',
			'distributor',
			'fun_facts' 
		];

		this.state = {
			activeField: null
		};

		this.update = this.update.bind(this);
		this.startClear = this.startClear.bind(this);
	}

	update(field){
		return (e) => {
			let value = e.currentTarget.value;
			const { setQueryField, requestSuggestions } = this.props;
			setQueryField(field, value);
			requestSuggestions(field, value);
		};
	}

	setActive(field){
		return (e) => {
			this.setState({activeField: field});
		}
	}

	startClear(){
		setTimeout(this.props.clearSuggestions, 500);
	}

	render() {
		const { queries, clearSuggestions } = this.props;
		const fields = this.fields.map( (field) => {
			if (field === 'mappable') {return}
			return (
				<div className="form-field" 
					key={`form-field-${field}`}>
					<label>{field}: 
						<input 
							type="text"
							onFocus={this.setActive(field)} 
							onChange={this.update(field)} 
							onBlur={this.startClear}
							value={queries[field]}
						/>
					</label>
					{ 
					this.state.activeField === field ? 
						<SuggestionsContainer field={this.state.activeField}/> 
						: ""
					}				
				</div>
			);
		});

		return (
			<div id="form">
				{fields}

			</div>
		);
	}
}

export default Form;