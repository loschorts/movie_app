import React from 'react';
import merge from 'lodash/merge';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actor_1: "",
			actor_2: "",
			actor_3: "",
			director: "",
			locations: "",
			production_company: "",
			release_year: "",
			title: "",
			writer: "",
			distributor: "",
			fun_facts: "",
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