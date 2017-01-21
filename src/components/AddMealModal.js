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

		this.state = {
			searchBarInput: ''
		}

		this.changeCalories = this.changeCalories.bind(this);
		this.changeSearchBarInput = this.changeSearchBarInput.bind(this);
		this.saveMeal = this.saveMeal.bind(this);
	}

	changeCalories(qty, unit) {
		const { actions, selectedFoodItem } = this.props;
		const query = qty + " " + unit + " " + selectedFoodItem.food_name;
		actions.nutritionixNaturalLanguage(query);
	}

	changeSearchBarInput(value) {
		this.setState({ searchBarInput: value });
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
				<If condition={!this.state.searchBarInput}>
					<Modal.Header>
						<h3
							className="date text-center"
							style={styles.headerText}>
							What did you <span style={{color: '#90A4AE'}}>eat</span> today?
						</h3>
					</Modal.Header>

				</If>

				<If condition={selectedFoodItem}>
					<Modal.Header>
						<DisplaySelectedFoodItem foodItem={selectedFoodItem} />

					</Modal.Header>
				</If>
				<Modal.Body>
					{/*<TimePicker
						hintText="Start Time"
						/>*/}

					<If condition={!selectedFoodItem}>
						<SearchBar
							changeSearchBarInput={this.changeSearchBarInput}
							/>
					</If>
					<If condition={selectedFoodItem}>

						<ServingSize
							measures={selectedFoodItem.alt_measures}
							changeCalories={this.changeCalories}
							selectedFoodItem={selectedFoodItem} />
					</If>

				</Modal.Body>

				<Modal.Footer>
					<button
						className="btn btn-success"
						onClick={this.saveMeal}>
						Add
					</button>

				</Modal.Footer>
			</Modal>
		)
	}
}

const styles = {
	headerText: {
		color: '#696969'
	},
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
