import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

import actions from '../actions/creators';
import SubmitButtons from './SubmitButtons';

class DeclareCalorieGoalModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			slider: this.props.caloriesGoal
		}

		this.changeSliderValue = this.changeSliderValue.bind(this);
		this.decreaseSliderValue = this.decreaseSliderValue.bind(this);
		this.increaseSliderValue = this.increaseSliderValue.bind(this);
		this.resetCalories = this.resetCalories.bind(this);
		this.setCalories = this.setCalories.bind(this);
	}

	changeSliderValue(event, value) {
		this.setState({ slider: value })
	}

	componentWillReceiveProps(nextProps) {
		const { caloriesGoal } = nextProps;
		this.setState({ slider: caloriesGoal })
	}

	decreaseSliderValue() {
		const { slider } = this.state;
		this.setState({ slider: slider - 1 })
	}

	increaseSliderValue() {
		const { slider } = this.state;
		this.setState({ slider: slider + 1 })
	}

	resetCalories() {
		this.setState({ slider: 0 });
	}

	setCalories() {
		const { actions, hide } = this.props;
		actions.setCalorieGoal(this.state.slider);
		hide();
	}

	render() {
		const { show, hide } = this.props;
		let caloriesGoal = this.state.slider;
		return (
			<Modal show={show} onHide={hide}>
				<Modal.Header closeButton>
					<h5 className="text-center" style={styles.modalHeader}>What is your <span style={{color: '#90A4AE'}}>target</span> calories intake today?</h5>
				</Modal.Header>
				<Modal.Body>
					<div
						className="slider-div"
						style={styles.sliderDiv}>
						<h3 style={styles.calorieHeader}>0</h3>
						<Slider
							className="slider"
							defaultValue={100}
							max={5000}
							min={0}
							onChange={this.changeSliderValue}
							step={5}
							value={caloriesGoal}
							/>
						<h3 style={styles.calorieHeader}>5000</h3>

					</div>

					<div
						className="text-center">
						<button
							className="btn btn-default"
							onClick={this.increaseSliderValue}
							style={styles.carets}>
							<i className="fa fa-caret-up"></i>
						</button>

						<h1
							className="date"
							style={styles.calorie}>
							{caloriesGoal} cals
						</h1>
						<button
							className="btn btn-default"
							onClick={this.decreaseSliderValue}
							style={styles.carets}>
							<i className="fa fa-caret-down"></i>
						</button>

					</div>



				</Modal.Body>

				<Modal.Footer>
					<SubmitButtons
						confirm={this.setCalories}
						reset={this.resetCalories}
						/>

				</Modal.Footer>
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
	carets: {
		color: '#90A4AE'
	},
	modalHeader: {
		color: '#696969'
	},
	sliderDiv: {
		display: 'flex'
	}
}

function mapStateToProps(state, ownProps) {
	return {
		// caloriesGoal: state.caloriesGoal.caloriesGoal
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeclareCalorieGoalModal);
