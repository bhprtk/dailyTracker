import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import image_heart from '../assets/heartTransparent.gif';

import DeclareCalorieGoalModal from './DeclareCalorieGoalModal';


class DisplayCaloriesConsumed extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}

		this.hideModal = this.hideModal.bind(this);
		this.showModal = this.showModal.bind(this);
	}

	hideModal() {
		this.setState({ showModal: false });
	}

	showModal() {
		this.setState({ showModal: true });
	}

	render() {
		const { showModal } = this.state;
		const { caloriesConsumed, caloriesGoal } = this.props;
		let percentage, rawPercentage;
		const formatCaloriesConsumed = Math.round(caloriesConsumed);
		if(caloriesConsumed && caloriesGoal) {
			rawPercentage = (caloriesConsumed / caloriesGoal) * 100;
			percentage = ((caloriesConsumed / caloriesGoal) * 100).toString() + "%";
		}
		return (
			<div
				onClick={this.showModal}
				style={styles.container}>
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
				<DeclareCalorieGoalModal
					show={showModal}
					hide={this.hideModal}
					caloriesGoal={caloriesGoal}/>
			</div>
		)
	}
}

const styles = {
	container: {
		background: '#E57373',
		// background: '#DD5152',
		color: '#fff',
		height: '40vh',
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
		width: 85
	},
	progress: {
		background: '#E57373',
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
