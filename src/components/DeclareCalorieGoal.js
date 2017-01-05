import React from 'react';
import Slider from 'material-ui/Slider';

const DeclareCalorieGoal = ({showModal}) => {
	return (
		<button
			className="btn btn-success"
			onClick={showModal}>
			Declare Calorie Goal
		</button>

	)
}

export default DeclareCalorieGoal;
