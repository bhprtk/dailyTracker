import React, { Component } from 'react';
import moment from 'moment';

import DeclareCalorieGoal from './DeclareCalorieGoal';
import DeclareCalorieGoalModal from './DeclareCalorieGoalModal';

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
			<div className="container">
				<h1>{moment().format('LL')}</h1>
				<h2>Calorie Goals: {calorieGoals}</h2>

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
