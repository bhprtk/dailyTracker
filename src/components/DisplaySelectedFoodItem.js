import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import actions from '../actions/creators';

class DisplaySelectedFoodItem extends Component {
	constructor(props) {
		super(props);

		this.removeSelectedFoodItem = this.removeSelectedFoodItem.bind(this);
	}

	removeSelectedFoodItem() {
		const { actions } = this.props;
		console.log('remove')
		actions.removeSelectedFoodItem();
	}

	render() {
		const { foodItem } = this.props;
		return (
			<button
				className="btn btn-default"
				onClick={this.removeSelectedFoodItem}>
				{foodItem.food_name}
			</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySelectedFoodItem);
