import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import TimePicker from 'material-ui/TimePicker';

import actions from '../actions/creators';
import DisplaySelectedFoodItem from './DisplaySelectedFoodItem';
import SearchBar from './SearchBar';
import ServingSize from './ServingSize';
import SubmitButtons from './SubmitButtons';

class AddMealModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchBarInput: '',
			resetServingSizeState: false
		}

		this.changeCalories = this.changeCalories.bind(this);
		this.changeSearchBarInput = this.changeSearchBarInput.bind(this);
		this.resetSearchBarInput = this.resetSearchBarInput.bind(this);
		this.resetServingSizeState = this.resetServingSizeState.bind(this);
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

	resetServingSizeState() {
		const { resetServingSizeState } = this.state;

		this.setState({ resetServingSizeState: !resetServingSizeState })
	}

	resetSearchBarInput() {
		this.setState({ searchBarInput: '' });
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
					<Modal.Header closeButton>
						<h3
							className="date text-center"
							style={styles.headerText}>
							What did you <span style={{color: '#90A4AE'}}>eat</span> today?
						</h3>
					</Modal.Header>

				</If>

				<If condition={selectedFoodItem}>
					<Modal.Header closeButton>
						<DisplaySelectedFoodItem
							foodItem={selectedFoodItem}
							resetSearchBarInput={this.resetSearchBarInput}/>
						{/*<SearchBar
							changeSearchBarInput={this.changeSearchBarInput}
							/>*/}
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
							selectedFoodItem={selectedFoodItem}
							resetState={this.state.resetServingSizeState} />
					</If>

				</Modal.Body>

					<Modal.Footer>
						<If condition={selectedFoodItem}>
						<SubmitButtons
							confirm={() => true}
							reset={this.resetServingSizeState}
							/>

					</If>

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
