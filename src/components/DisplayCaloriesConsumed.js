import { connect } from 'react-redux';
import React, { Component } from 'react';


class DisplayCaloriesConsumed extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { caloriesConsumed, caloriesGoal } = this.props;
		let percentage;
		if(caloriesConsumed && caloriesGoal) {
			percentage = ((caloriesConsumed / caloriesGoal) * 100).toString() + "%";
		}
		return (
			<div>
				<h3>Calories consumed today: {caloriesConsumed}</h3>
				<div style={styles.progressBarOutline}>
					<div style={styles.innerDiv}>
						<div className="progress" style={styles.progress}>
							<div
								className="progress-bar"
								style={{
									width: percentage,
									background: '#2BC253',
									boxShadow: 'none'

								}}>
							</div>
						</div>

					</div>

				</div>
			</div>
		)
	}
}

const styles = {
	innerDiv: {
		background: '#555555',
		padding: 10,
		borderRadius: 30,
		height: 50
	},
	progress: {
		background: '#555555',
		borderRadius: 15,
		height: 30
	},
	progressBarOutline: {
		background: '#333333',
		padding: 10
	}
}


function mapStateToProps(state, ownProps) {
	return {
		caloriesConsumed: state.caloriesConsumed.caloriesConsumed,
		caloriesGoal: state.caloriesGoal.caloriesGoal
	}
}

export default connect(mapStateToProps)(DisplayCaloriesConsumed);
