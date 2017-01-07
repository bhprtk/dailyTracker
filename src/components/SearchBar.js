import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import actions from '../actions/creators';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const { value } = e.target;
		const { actions } = this.props;
		console.log ('actions:', actions)
		actions.nutritionixAutocomplete(value);
		this.setState({ input: value });
	}

	render() {
		return (
			<input
				type="text"
				className="form-control"
				value={this.state.input}
				onChange={this.handleChange}/>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
