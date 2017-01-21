import React, { Component } from 'react';
import Select from 'react-select';

import MeasuresList from './MeasuresList';

class ServingSize extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMeasuresList: false,
			unit: '',
			qty: 0
		}

		this.decreaseQty = this.decreaseQty.bind(this);
		this.increaseQty = this.increaseQty.bind(this);
		this.selectUnit = this.selectUnit.bind(this);
		this.showMeasuresList = this.showMeasuresList.bind(this);
	}

	decreaseQty() {
		const { qty, unit } = this.state;
		const { changeCalories } = this.props;
		this.setState({ qty: qty - 1 });
		changeCalories(qty - 1, unit);
	}

	increaseQty() {
		const { qty, unit } = this.state;
		const { changeCalories } = this.props;
		this.setState({ qty: qty + 1 });
		changeCalories(qty + 1, unit);
	}

	selectUnit(unit) {
		const { changeCalories } = this.props;
		const { qty } = this.state;
		this.setState({
			unit,
			showMeasuresList: false
		});
		changeCalories(qty, unit);
	}

	showMeasuresList() {
		if(this.state.showMeasuresList) {
			this.setState({ showMeasuresList: false });
		} else {
			this.setState({ showMeasuresList: true });
		}
	}

	render() {
		const { measures, selectedFoodItem } = this.props;
		let measuresArr;
		const calories = selectedFoodItem.nf_calories;
		if(measures) {
			measuresArr = measures.map(measure => measure.measure);

		}
		return (
			<If condition={measuresArr}>
				<div style={styles.container}>
						<div style={styles.selectRow}>
							<div className="text-center">

								<button
									className="btn btn-default"
									onClick={this.increaseQty}
									style={styles.grey69}>
									<i className="fa fa-caret-up"></i>
								</button>

								<p
									className="text-center date"
									style={{ marginTop: 10 }}>
									<span style={{
											color: '#90A4AE',
											fontSize: 32
										}}>
										{this.state.qty}
									</span>
									<span style={{
											color: '#696969',
											fontSize: 20
										}}> {this.state.unit}</span>
								</p>



							<button
								className="btn btn-default"
								onClick={this.decreaseQty}
								style={styles.grey69}>
									<i className="fa fa-caret-down"></i>
								</button>

							</div>


						</div>



					<div className="text-center">
						<h1 className="date">
							<span style={styles.greyBlue}>{calories}</span>
							<span style={styles.grey69}> kcal</span>
							</h1>
					</div>

					<If condition={measuresArr}>
						<div
							className="text-center"
							onClick={this.showMeasuresList}
							style={styles.unit}>
							<strong>Select Unit</strong>
							<span
								className="pull-right"
								style={styles.grey69}>
								<i className="fa fa-caret-down"></i>
							</span>
						</div>
						<If condition={this.state.showMeasuresList}>
							<MeasuresList
								selectUnit={this.selectUnit}
								measures={measuresArr}/>
						</If>

					</If>


				</div>

			</If>


		)
	}
}

const styles = {
	container: {
		padding: 10,
		marginTop: 20
	},
	grey69: {
		color: '#696969'
	},
	greyBlue: {
		color: '#90A4AE'
	},
	input: {
		width: 50,
		padding: 5,
		color: '#696969'
	},
	selectRow: {
		// display: 'flex'
	},
	unit: {
		// background: '#fafafa',
		borderColor: '#696969',
		borderWidth: 2,
		borderStyle: 'solid',
		color: '#90A4AE',
		height: 40,

		padding: 10,
		marginTop: 20,
		width: '100%'
	}
}

export default ServingSize;
