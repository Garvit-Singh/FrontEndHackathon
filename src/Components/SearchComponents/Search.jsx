import React, { Component } from 'react';
import SingleCard from './SearchSingleCard';
import './search.css';

class SearchPage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container mt-5">
				<div className="row no-gutters clearfix mt-5">
					{this.props.users.map((user, key) => {
						return <SingleCard key={user._id} user={user} />;
					})}
				</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SearchPage;
