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
		actions.nutritionixAutocomplete(value);
		this.setState({ input: value });
	}

	render() {
		console.log ('this.props.searchInstantResults:', this.props.searchInstantResults)
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
		searchInstantResults: state.searchInstantResults.searchInstantResults
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
