import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import actions from '../actions/creators';
import SearchResults from './SearchResults';

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
		if(value) {
			actions.nutritionixAutocomplete(value);
		}
		this.setState({ input: value });
	}

	render() {
		return (
			<div>
				<input
					type="text"
					className="form-control"
					value={this.state.input}
					onChange={this.handleChange}
					style={styles.inputBox}/>

				<If condition={this.state.input}>
					<SearchResults
						results={this.props.searchInstantResults.common}/>
				</If>

			</div>

		)
	}
}

const styles = {
	inputBox: {
		fontSize: 20
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
