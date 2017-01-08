import React, { Component } from 'react';
import Select from 'react-select';

class ServingSize extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [
			    { value: 'one', label: 'One' },
			    { value: 'two', label: 'Two' }
			]
		}
	}
	render() {
		return (
			<Select
		    name="form-field-name"
		    value="one"
		    options={this.state.options}
			/>

		)
	}
}

export default ServingSize;
