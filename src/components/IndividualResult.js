import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import actions from '../actions/creators';

class IndividualResult extends Component {
	constructor(props) {
		super(props);

		this.selectFood = this.selectFood.bind(this);
	}

	selectFood() {
		const { result, actions } = this.props;
		console.log ('result:', result)
		actions.selectFoodItem(result);
	}

	render() {
		const { result } = this.props;
		return (
			<a
				onClick={this.selectFood}
				role="button"
				className="list-group-item">
				<img src={result.photo.thumb} style={styles.thumbnail} />
				<span style={styles.foodName}>{result.food_name}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(IndividualResult);
