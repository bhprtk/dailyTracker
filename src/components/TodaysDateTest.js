import React from 'react';
import moment from 'moment'

const TodaysDate = ({}) => {
	return (
		<div
			style={styles.container}>
			<div
				style={styles.innerDiv}
				className="date">
				<p style={styles.date}>{moment().format('MMMM D')}</p>
				<p style={styles.year}>{moment().format('YYYY')}</p>
			</div>
			<div style={styles.base} className="base"></div>
		</div>
	)
}

const styles = {
	base: {
		background: '#E67354',
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		height: 75
	},
	container: {
		background: '#544946',
		color: '#fafafa',
		padding: 50
	},
	date: {
		color: '#696969',
		fontSize: 50,
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
		color: '#a8a8a8',
		fontSize: 40,
		fontWeight: 'bold'
	}
}

export default TodaysDate;
