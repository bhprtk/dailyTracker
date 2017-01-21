import React, { Component } from 'react';
import Select from 'react-select';

class ServingSize extends Component {
	constructor(props) {
		super(props);

		this.state = {
			unit: '',
			qty: null
		}

		this.changeUnit = this.changeUnit.bind(this);
		this.changeQty = this.changeQty.bind(this);
	}

	changeUnit(unit) {
		this.setState({ unit: unit.value })
		this.props.changeCalories(this.state.qty, unit.value)
	}

	changeQty(e) {
		const qty = e.target.value;
		this.setState({ qty });
		this.props.changeCalories(qty, this.state.unit)
	}

	render() {
		const { measures, selectedFoodItem } = this.props;
		let measuresArr;
		const calories = selectedFoodItem.nf_calories;
		if(measures) {
			measuresArr = measures.map(measure => {
				return {
					value: measure.measure,
					label: measure.measure
				}
			});

		}
		return (
				<If condition={measuresArr}>
					<div>
						<div className="row">
							<div style={styles.selectRow}>
								<div>
									<label>Qty</label>
									<input
										type="number"
										className="text-center form-control"
										min={0}
										style={styles.input}
										onChange={this.changeQty}/>

								</div>

								<div className="col-md-12 col-sm-12 col-xs-12">
									<label>Unit</label>
									<Select
										placeholder="Unit"
										value={this.state.unit}
										options={measuresArr}
										onChange={this.changeUnit}
										style={styles.unit}
										/>

								</div>

							</div>



						</div>
						<div className="text-center">
							<label>Calories</label>
							<p style={styles.calories}>{calories} kcal</p>
						</div>

					</div>

				</If>


		)
	}
}

const styles = {
	input: {
		width: 50,
		padding: 5,
		color: '#696969'
	},
	calories: {
		fontSize: 24
	},
	selectRow: {
		display: 'flex'
	}
}

export default ServingSize;
