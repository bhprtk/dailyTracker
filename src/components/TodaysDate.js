import React from 'react';
import moment from 'moment'

const TodaysDate = ({}) => {
	let date = moment().format('MMMM Do YYYY, h:mm:ss a');
	console.log ('date:', date)
	return (
		<h1>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
	)
}

export default TodaysDate;
