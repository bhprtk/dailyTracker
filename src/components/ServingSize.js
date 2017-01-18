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
					<div className="row">
						<div className="form-inline">
							<div className="form-group col-md-1 col-sm-1 col-xs-1">
								<label>Qty</label>
								<input
									type="number"
									className="text-center form-control"
									min={0}
									style={styles.input}
									onChange={this.changeQty}/>

							</div>

							<div className="form-group col-md-6 col-sm-6 col-xs-6">
								<label>Unit</label>
								<Select
									placeholder="Unit"
									value={this.state.unit}
									options={measuresArr}
									onChange={this.changeUnit}
									style={styles.unit}
									/>

							</div>

							<div className="form-group col-md-3 col-sm-3 col-xs-3 pull-right">
								<label>Calories</label>
								<p style={styles.calories}>{calories} kcal</p>
							</div>

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
	}
}

export default ServingSize;
