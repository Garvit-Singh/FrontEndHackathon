import React, { Component } from 'react';

class SingleSearchCard extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-md-3 col-sm-12">
				<div id="NGO_Logo" className="card text-center mt-5 search-card">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7ksGePhqK2pmADi026E4mmLluawPAHtyOhA&usqp=CAU" className="card-img-top" alt="..." />
					<div className="card-body">
							<h5 className="card-title">{this.props.user.ngoName}</h5>
							<p className="card-text">
								{this.props.user.ngoAim}
							</p>
						<a href="#1" className="btn btn-outline-success">
							See More
						</a>
					</div>
				</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SingleSearchCard;
