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
				<h1 className=" text-center">Search Content</h1>
				<div className="row d-flex justify-content-around mt-auto">
					{this.state.ngo.map((ngo, key) => {
						return <SingleCard ngo={this.state.ngo} />;
					})}
				</div>
			</React.Fragment>
		);
	}
}

export default SearchPage;
