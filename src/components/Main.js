import actions from '../actions/creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import moment from 'moment';

import AddMeal from './AddMeal';
import DeclareCalorieGoalButton from './DeclareCalorieGoalButton';
import DeclareCalorieGoalModal from './DeclareCalorieGoalModal';
import DisplayCaloriesConsumed from './DisplayCaloriesConsumed';
import TodaysDate from './TodaysDate';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			calorieGoals: null,
			showModal: false
		}

		this.hideModal = this.hideModal.bind(this);
		this.resetCaloriesGoal = this.resetCaloriesGoal.bind(this);
		this.showModal = this.showModal.bind(this);
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	resetCaloriesGoal() {
		const { actions } = this.props;
		actions.resetCaloriesGoal();
	}

	showModal() {
		this.setState({ showModal: true });
	}


	render() {
		const { showModal } = this.state;
		const { caloriesGoal } = this.props;
		return (
			<div className="container">
				<div className="row">
					<TodaysDate />
				</div>
				<div className="row">
					<If condition={!caloriesGoal}>
						<DeclareCalorieGoalButton showModal={this.showModal}/>
					</If>
					<If condition={caloriesGoal}>
						<DisplayCaloriesConsumed />
					</If>
				</div>
				<div className="row">
					<AddMeal />
				</div>

			<button
				className="btn btn-default"
				onClick={this.resetCaloriesGoal}>
				Reset Calories
			</button>

			<DeclareCalorieGoalModal
				show={showModal}
				hide={this.hideModal}
				caloriesGoal={caloriesGoal}/>
			</div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
