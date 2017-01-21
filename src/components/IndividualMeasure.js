import React, { Component } from 'react';

class IndividualMeasure extends Component {
	constructor(props) {
		super(props);

		this.selectUnit = this.selectUnit.bind(this);
	}

	selectUnit() {
		const { measure, selectUnit } = this.props;
		selectUnit(measure);
	}

	render() {
		const { measure } = this.props;
		return (
			<a
				className="list-group-item"
				onClick={this.selectUnit}>
				{measure}
			</a>
		)
	}
}

export default IndividualMeasure;
