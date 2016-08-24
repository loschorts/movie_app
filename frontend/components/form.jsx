import React from 'react';
import merge from 'lodash/merge';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actor_1: null,
			actor_2: null,
			actor_3: null,
			director: null,
			locations: null,
			production_company: null,
			release_year: null,
			title: null,
			writer: null,
			distributor: null,
			fun_facts: null,
		};

		this.update = this.update.bind(this);
	}

	update(field){
		return (e) => this.props.setQueryField(field, e.currentTarget.value);
	}

	render() {
		const fields = Object.keys(this.state).map( (field) => {
			if (field === 'mappable') {return}
			return (
				<div className="form-input-field" 
					key={`form-field-${field}`}>
				<label>{field}: 
					<input 

						type="text" 
						onChange={this.update(field)} 
						value={this.state[field]}
					/>
				</label>
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