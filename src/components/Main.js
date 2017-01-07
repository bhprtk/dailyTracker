import React, { Component } from 'react';
import moment from 'moment';

import AddMeal from './AddMeal';
import CaloriesConsumed from './CaloriesConsumed';
import DeclareCalorieGoal from './DeclareCalorieGoal';
import DeclareCalorieGoalModal from './DeclareCalorieGoalModal';
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
		if(!this.state.calorieGoals) {
			calorieGoals = <DeclareCalorieGoal showModal={this.showModal}/>
		} else {
			calorieGoals = this.state.calorieGoals
		}
		return (
			<div className="">
				<div className="row">
					<TodaysDate />
				</div>
				<div className="row">
					<div
						className="col-md-6 col-sm-6 col-xs-6"
						style={styles.calorieGoals}>
						<h1 className="text-center">Calorie Goals: {calorieGoals}</h1>
					</div>
					<div className="col-md-6 col-sm-6 col-xs-6">
						<CaloriesConsumed />
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

const styles = {
	calorieGoals: {
		background: '#ACD1E9',
		color: '#fafafa',
		height: 100
	}
}

export default Main;
