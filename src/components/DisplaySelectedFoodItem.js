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
			<a
				onClick={this.removeSelectedFoodItem}
				role="button"
				className="list-group-item">
				<img src={foodItem.photo.thumb} style={styles.thumbnail} />
				<span style={styles.foodName}>{foodItem.food_name}</span>
			</a>
		)
	}
}

const styles = {
	thumbnail: {
		height: 50,
		width: 50
	},
	foodName: {
		marginLeft: 15,
		fontSize: 24,
		color: '#696969'
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
