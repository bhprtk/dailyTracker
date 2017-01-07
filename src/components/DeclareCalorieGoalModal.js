import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Slider from 'material-ui/Slider';

class DeclareCalorieGoalModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			slider: 50
		}

		this.setCalories = this.setCalories.bind(this);
	}

	setCalories(event, value) {
		this.setState({ slider: value })
		this.props.setCalories(value);
	}

	render() {
		const { show, hide } = this.props;
		return (
			<Modal show={show} onHide={hide}>
				<Modal.Header>
					<h3 className="text-center" style={styles.modalHeader}>What is your <span style={{color: '#90A4AE'}}>target</span> calories intake today?</h3>
				</Modal.Header>
				<Modal.Body>
					<div className="slider-div">
						<h1 style={styles.calorieHeader}>0</h1>
						<Slider
							className="slider"
							min={0}
							max={5000}
							step={1}
							defaultValue={100}
							value={this.state.slider}
							onChange={this.setCalories}
							/>
						<h1 style={styles.calorieHeader}>5000</h1>

					</div>

					<h1 className="text-center" style={styles.calorie}>
						{this.props.calorieGoals} cals
					</h1>
				</Modal.Body>
			</Modal>
		)
	}
}

const styles = {
	calorie: {
		color: '#90A4AE',
		fontSize: 64
	},
	calorieHeader: {
		color: '#90A4AE'
	},
	modalHeader: {
		color: '#696969'
	}
}

export default DeclareCalorieGoalModal;
