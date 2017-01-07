import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import TimePicker from 'material-ui/TimePicker';

import SearchBar from './SearchBar';

class AddMealModal extends Component {
	render() {
		const { showModal, hideModal } = this.props;
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
					<SearchBar />
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

export default AddMealModal;
