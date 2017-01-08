import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import TimePicker from 'material-ui/TimePicker';

import DisplaySelectedFoodItem from './DisplaySelectedFoodItem';
import SearchBar from './SearchBar';

class AddMealModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { showModal, hideModal, selectedFoodItem } = this.props;
		return (
			<Modal show={showModal} onHide={hideModal}>
				<Modal.Header>
					<h3 className="text-center">Add Meal</h3>
				</Modal.Header>
				<Modal.Body>
					<TimePicker
						hintText="Start Time"
						/>
					<TimePicker
						hintText="End Time"
						/>
					<If condition={!selectedFoodItem}>
						<SearchBar />
					</If>
					<If condition={selectedFoodItem}>
						<DisplaySelectedFoodItem foodItem={selectedFoodItem}/>
					</If>
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

export default connect(mapStateToProps)(AddMealModal);
