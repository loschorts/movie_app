import React from 'react';
import { connect } from 'react-redux';
import { setDetail } from '../actions/locations'

class IndexItem extends React.Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		e.preventDefault();
		this.props.setDetail(this.props.location.id);
	}
	render() {
		const { location } = this.props;
		return (
			<li><a 
				href="#" 
				className="index-item" 
				onClick={this.handleClick}>
				{location.title}: {location.locations}
			</a></li>
		);
	}
}

const mapState = state => ({

});

const mapDispatch = dispatch => ({
	setDetail: id => { dispatch(setDetail(id)) }
});

export default connect(mapState, mapDispatch)(IndexItem);