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
			<div
				className="calories-consumed-container"
				style={styles.container}>
				<h3>Calories consumed today: {caloriesConsumed}</h3>
				<div
					className="col-md-10 col-sm-10 col-xs-10 col-md-offset-1 col-sm-offset-1 col-xs-offset-1"
					style={styles.outline}>
					<div className="progress" style={styles.progress}>
						<div
							className="progress-bar"
							style={{
								width: percentage,
								background: '#fff',
								boxShadow: 'none'

							}}>
						</div>
					</div>

				</div>


			</div>
		)
	}
}

const styles = {
	container: {
		background: '#555555',
		color: '#fff',
		height: 170
	},
	outline: {
		borderColor: '#fff',
		borderRadius: 30,
		borderStyle: 'solid',
		borderWidth: 5,
		height: 40,
		paddingBottom: 5,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 5
	},
	progress: {
		background: '#555555',
		borderRadius: 20,
		// height: 30
	}
}


function mapStateToProps(state, ownProps) {
	return {
		caloriesConsumed: state.caloriesConsumed.caloriesConsumed,
		caloriesGoal: state.caloriesGoal.caloriesGoal
	}
}

export default connect(mapStateToProps)(DisplayCaloriesConsumed);
