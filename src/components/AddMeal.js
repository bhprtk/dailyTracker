import React, { Component } from 'react';

import AddMealModal from './AddMealModal';
import image_turkey from '../assets/turkey.png'


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
					className="btn btn-default col-md-12 col-sm-12 col-xs-12 date"
					onClick={this.showModal}
					style={styles.button}>
					<h3>
						<img src={image_turkey} height="50" width="50"/>
						<strong> Add Meal</strong>
					</h3>
				</button>

				<AddMealModal
					showModal={showModal}
					hideModal={this.hideModal}/>
			</div>
		)
	}
}

const styles = {
	button: {
		color: '#fff',
		background: '#81C784',
		fontWeight: 'bold',
		height: '30vh'
	}
}

export default AddMeal;
