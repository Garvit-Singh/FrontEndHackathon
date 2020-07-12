import React, { Component } from 'react';
import SingleCard from './SearchSingleCard';
import './search.css';

class SearchPage extends Component {
	state = {
		ngo: [
			{
				name: 'NGO 1'
			},
			{
				name: 'NGO 2'
			},
			{
				name: 'NGO 3'
			},
			{
				name: 'NGO 4'
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<div className="container mt-5">
				<div className="row no-gutters clearfix mt-5">
					{this.state.ngo.map((ngo, key) => {
						return <SingleCard ngo={this.state.ngo} />;
					})}
				</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SearchPage;
