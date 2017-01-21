import React, { Component } from 'react';

class SubmitButtons extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { reset, confirm } = this.props;
		return (
			<div>
				<button
					className="date col-md-5 col-sm-5 col-xs-5"
					onClick={reset}
					style={styles.submitButton}>
					<h4>Reset</h4>
				</button>

				<button
					className="date col-md-5 col-sm-5 col-xs-5"
					onClick={confirm}
					style={styles.submitButton}>
					<h4>Confirm</h4>
				</button>

			</div>
		)
	}
}

const styles = {
	submitButton: {
		background: '#fff',
		borderColor: '#90A4AE',
		borderStyle: 'solid',
		borderWidth: 2,
		color: '#90A4AE',
		margin: 10
	}
}

export default SubmitButtons;
