import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import DeclareCalorieGoal from './DeclareCalorieGoal';

import actions from '../actions/creators';

class DisplayCalorieGoal extends Component {
	constructor(props) {
		super(props);

		this.resetCaloriesGoal = this.resetCaloriesGoal.bind(this);
	}

	resetCaloriesGoal() {
		const { actions } = this.props;
		actions.resetCaloriesGoal();
	}

	render() {
		console.log ('this.props.caloriesGoal:', this.props.caloriesGoal)
		const { caloriesGoal, showModal } = this.props
		if(!caloriesGoal) {
			return (
				<DeclareCalorieGoal showModal={showModal}/>
			)
		} else {
			return (
				<div
					style={styles.caloriesGoals}>
					<h1 className="text-center">Calorie Goals: {caloriesGoal}</h1>
					<button
						className="btn btn-default"
						onClick={this.resetCaloriesGoal}>
						Reset
					</button>
				</div>
			)
		}
	}
}

const styles = {
	caloriesGoals: {
		background: '#ACD1E9',
		color: '#fafafa',
		height: 100
	}
}


function mapStateToProps(state, ownProps) {
	return {
		caloriesGoal: state.caloriesGoal.caloriesGoal
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCalorieGoal);
