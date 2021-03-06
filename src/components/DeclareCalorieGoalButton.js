import React from 'react';
import Slider from 'material-ui/Slider';
import image_goal from '../assets/goal.png';

const DeclareCalorieGoalButton = ({showModal}) => {
	return (
		<button
			className="btn btn-default col-md-12 col-sm-12 col-xs-12"
			onClick={showModal}
			style={styles.button}>
			<h3 className="date">
				<img src={image_goal} />
				<strong> Declare Calorie Goal</strong>
			</h3>

		</button>

	)
}

const styles = {
	button: {
		background: '#E57373',
		color: '#fff',
		fontWeight: 'bold',
		height: '40vh'
	}
}

export default DeclareCalorieGoalButton;
