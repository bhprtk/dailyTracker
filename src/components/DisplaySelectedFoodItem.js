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
		actions.removeSelectedFoodItem();
	}

	render() {
		const { foodItem } = this.props;
		return (
			<div className="text-center">
				<div
					onClick={this.removeSelectedFoodItem}
					className="text-center"
					style={styles.container}>
					<img src={foodItem.photo.thumb} style={styles.thumbnail} />
					<span style={styles.foodName}>{foodItem.food_name}</span>
				</div>

			</div>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		height: 55,
		padding: 5,
	},
	thumbnail: {
		height: 45,
		width: 45
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
