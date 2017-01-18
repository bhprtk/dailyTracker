import React from 'react';
import moment from 'moment'

const TodaysDate = ({}) => {
	return (
		<div
			className="text-center"
			style={styles.container}>

				<h3
					className="date"
					style={styles.date}>
					<i className="fa fa-calendar" aria-hidden="true"></i> {(moment().format('ddd ll'))}
				</h3>

		</div>
	)
}

const styles = {
	container: {
		background: '#78909C',
		color: '#fff',
		padding: 50,
		// fontSize: 24
	},
	date: {
		// color: '#696969',
		// fontSize: 50,
		fontWeight: 'bold'
	},
	innerDiv: {
		background: 'white',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		padding: 20
		// paddingTop: 10,
		// paddingLeft: 10,
		// paddingRight: 10,
	},
	year: {
		// color: '#a8a8a8',
		// fontSize: 40,
		fontWeight: 'bold'
	}
}

export default TodaysDate;
