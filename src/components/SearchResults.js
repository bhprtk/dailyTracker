import React, { Component } from 'react';

import IndividualResult from './IndividualResult';

class SearchResults extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { results } = this.props;
		let items;
		if(results) {
			items = results.map((result, index) => {
				return (
					<IndividualResult key={index} result={result}/>
				)
			})
		}
		return (
			<div className="list-group">
				{items}
			</div>
		)
	}
}

export default SearchResults;
