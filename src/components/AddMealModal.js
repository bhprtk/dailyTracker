import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import TimePicker from 'material-ui/TimePicker';

import actions from '../actions/creators';
import DisplaySelectedFoodItem from './DisplaySelectedFoodItem';
import SearchBar from './SearchBar';
import ServingSize from './ServingSize';

class AddMealModal extends Component {
	constructor(props) {
		super(props);

		this.changeCalories = this.changeCalories.bind(this);
		this.saveMeal = this.saveMeal.bind(this);
	}

	changeCalories(qty, unit) {
		const { actions, selectedFoodItem } = this.props;
		const query = qty + " " + unit + " " + selectedFoodItem.food_name;
		actions.nutritionixNaturalLanguage(query);
	}

	saveMeal() {
		const { actions, selectedFoodItem, hideModal } = this.props;
		actions.updateTodaysCalories(selectedFoodItem.nf_calories);
		actions.removeSelectedFoodItem();
		hideModal();
	}

	render() {
		const { showModal, hideModal, selectedFoodItem } = this.props;
		return (
			<Modal show={showModal} onHide={hideModal}>
				<Modal.Header>
					<h3 className="text-center">Add Meal</h3>
				</Modal.Header>
				<Modal.Body>
					{/*<TimePicker
						hintText="Start Time"
						/>*/}

					<If condition={!selectedFoodItem}>
						<SearchBar />
					</If>
					<If condition={selectedFoodItem}>
						<DisplaySelectedFoodItem foodItem={selectedFoodItem} />
						<ServingSize
							measures={selectedFoodItem.alt_measures}
							changeCalories={this.changeCalories}
							selectedFoodItem={selectedFoodItem} />
					</If>

					<button
						className="btn btn-success"
						onClick={this.saveMeal}>
						Add
					</button>
				</Modal.Body>
			</Modal>
		)
	}
}

const styles = {
	timePicker: {
		// borderWidth: 1,
		borderColor: '#696969',
		border: 'solid',
		padding: 5,

	}
}

function mapStateToProps(state, ownProps) {
	return {
		selectedFoodItem: state.selectedFoodItem.selectedFoodItem
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMealModal);
