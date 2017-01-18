import React, { Component } from 'react';
import moment from 'moment';

import AddMeal from './AddMeal';
import DeclareCalorieGoal from './DeclareCalorieGoal';
import DeclareCalorieGoalModal from './DeclareCalorieGoalModal';
import DisplayCalorieGoal from './DisplayCalorieGoal';
import DisplayCaloriesConsumed from './DisplayCaloriesConsumed';
import TodaysDate from './TodaysDate';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			calorieGoals: null,
			showModal: false
		}

		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.setCalories = this.setCalories.bind(this);
	}

	showModal() {
		this.setState({ showModal: true });
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	setCalories(value) {
		this.setState({ calorieGoals: value })
	}

	render() {
		let calorieGoals;
		const { showModal } = this.state;

		return (
			<div className="container">
				<div className="row">
					<TodaysDate />
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-6 col-xs-6">
						<DisplayCalorieGoal showModal={this.showModal}/>
					</div>
					<div className="col-md-6 col-sm-6 col-xs-6">
						<DisplayCaloriesConsumed />
					</div>

				</div>

				<AddMeal />

				<DeclareCalorieGoalModal
					show={showModal}
					hide={this.hideModal}
					setCalories={this.setCalories}
					calorieGoals={this.state.calorieGoals}/>
			</div>
		);
	}

}

export default Main;
