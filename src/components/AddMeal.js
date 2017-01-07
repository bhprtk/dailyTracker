import React, { Component } from 'react';

import AddMealModal from './AddMealModal';

class AddMeal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	showModal() {
		this.setState({ showModal: true });
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	render() {
		const { showModal } = this.state;
		return (
			<div>
				<button
					className="btn btn-success btn-lg"
					onClick={this.showModal}>
					Add Meal
				</button>

				<AddMealModal
					showModal={showModal}
					hideModal={this.hideModal}/>
			</div>
		)
	}
}

export default AddMeal;
