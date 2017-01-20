import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import image_heart from '../assets/heart.gif';


class DisplayCaloriesConsumed extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { caloriesConsumed, caloriesGoal } = this.props;
		let percentage, rawPercentage;
		const formatCaloriesConsumed = Math.round(caloriesConsumed);
		if(caloriesConsumed && caloriesGoal) {
			rawPercentage = (caloriesConsumed / caloriesGoal) * 100;
			percentage = ((caloriesConsumed / caloriesGoal) * 100).toString() + "%";
		}
		return (
			<div style={styles.container}>
				<div style={styles.flexContainer}>
					<img
						style={styles.heartImage}
						src={image_heart}/>
					<div
						className="col-md-12 col-sm-12 col-xs-12"
						style={styles.flexColumn}>
						<div
							className="outline">
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
						<h4 className="date">
							{formatCaloriesConsumed} / {caloriesGoal}
						</h4>

					</div>

				</div>
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#DD5152',
		color: '#fff',
		height: 200,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 40,
	},
	flexContainer: {
		display: 'flex'
	},
	flexColumn: {
		flexDirection: 'column'
	},
	innerDiv: {
		background: '#555555',
		padding: 10,
		borderRadius: 30,
		height: 50
	},
	heart: {
		background: 'red',
		height: 70,
		width: 70
	},
	heartImage: {
		height: 75,
		width: 75
	},
	progress: {
		background: '#DD5152',
		borderRadius: 15,
		height: 15
	}
}


function mapStateToProps(state, ownProps) {
	return {
		caloriesConsumed: state.caloriesConsumed.caloriesConsumed,
		caloriesGoal: state.caloriesGoal.caloriesGoal
	}
}

export default connect(mapStateToProps)(DisplayCaloriesConsumed);
