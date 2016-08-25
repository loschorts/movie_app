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
		const { requestSuggestions } = this.props;
		return (e) => {
			this.setState({activeField: field});
		}
	}

	render() {
		const { queries } = this.props;
		const fields = this.fields.map( (field) => {
			if (field === 'mappable') {return}
			return (
				<div className="form-input-field" 
					key={`form-field-${field}`}>
					<label>{field}: 
						<input 
							type="text"
							onFocus={this.setActive(field)} 
							onChange={this.update(field)} 
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