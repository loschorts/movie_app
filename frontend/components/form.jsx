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

		this.handleSubmit = this.handleSubmit.bind(this);
		this.update = this.update.bind(this);
	}

	handleSubmit(){
		let query = merge({}, this.state);
		Object.keys(this.state).forEach( field => {
			if (query[field] === "") delete query[field];
		});
		this.props.fetchLocations();
	}

	update(field){
		return (e) => this.setState({[field]: e.currentTarget.value},
			this.props.setQueries(this.state));
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
				<button onClick={this.handleSubmit}>Search</button>
			</div>
		);
	}
}

export default Form;