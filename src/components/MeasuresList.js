import React, { Component } from 'react';
import IndividualMeasure from './IndividualMeasure';

class MeasuresList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { measures, selectUnit } = this.props;
		console.log ('measures:', measures)
		let displayMeasures;
		if(measures) {
			displayMeasures = measures.map((measure, index) => {
				return (
					<IndividualMeasure
						key={index}
						measure={measure}
						selectUnit={selectUnit}/>
				)
			})

		}
		return (
			<div
				className="list-group">
				{displayMeasures}
			</div>
		)
	}
}

export default MeasuresList;
