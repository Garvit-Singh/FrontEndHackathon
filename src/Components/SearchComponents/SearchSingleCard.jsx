import React, { Component } from 'react';

class SingleSearchCard extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-md-3 mt-5">
					<div id="NGO_Logo" className="card shadow p-3 mb-5" style={{ width: '18rem' }}>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7ksGePhqK2pmADi026E4mmLluawPAHtyOhA&usqp=CAU"
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's
								content.
							</p>
							<a href="#" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default SingleSearchCard;
