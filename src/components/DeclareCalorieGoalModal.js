import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

import actions from '../actions/creators';

class DeclareCalorieGoalModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			slider: 0
		}

		this.changeSliderValue = this.changeSliderValue.bind(this);
		this.setCalories = this.setCalories.bind(this);
	}

	changeSliderValue(event, value) {
		this.setState({ slider: value })
		// this.props.setCalories(value);
	}

	setCalories() {
		const { actions, hide } = this.props;
		actions.setCalorieGoal(this.state.slider);
		hide();
		console.log ('this.state.slider:', this.state.slider)

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
							step={5}
							defaultValue={100}
							value={this.state.slider}
							onChange={this.changeSliderValue}
							/>
						<h1 style={styles.calorieHeader}>5000</h1>

					</div>

					<h1 className="text-center" style={styles.calorie}>
						{this.state.slider} cals
					</h1>

					<button
						className="btn btn-success"
						onClick={this.setCalories}>
						Declare
					</button>
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

function mapStateToProps(state, ownProps) {
	return {

	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeclareCalorieGoalModal);
