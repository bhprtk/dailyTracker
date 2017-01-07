import React from 'react';
import moment from 'moment'

const TodaysDate = ({}) => {
	return (
		<div style={styles.container} className="col-md-6 col-sm-6 col-xs-6">
			<h1 className="text-center">{moment().format('LL')}</h1>
		</div>
	)
}

const styles = {
	container: {
		background: '#6D929B',
		color: '#fafafa',
		height: 100
	}
}

export default TodaysDate;
