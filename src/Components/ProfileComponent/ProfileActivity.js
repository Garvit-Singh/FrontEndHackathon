import React, { Component } from 'react';
import image1 from '../Images/download.jpg';
import image2 from '../Images/image.jpg';
import image3 from '../Images/images.jpg';

class ProfileActivity extends Component {
	state = {
		recent_Activities: []
	};
	return() {
		<React.Fragment>
				<div className="col-md-8 profile-activity">
					<h3>Recent Activities</h3>
					<div id="recentActivities" className="carousel slide carousel-fade" data-ride="carousel">
						<ol className="carousel-indicators">
							{this.state.recent_Activities.map((activity, key) => {
								<li key={activity._id} data-target="#recentActivities" data-slide-to={key} />;
							})}
						</ol>
						<div className="carousel-inner">
							{this.state.recent_Activities.map((activity) => {
								<div className="carousel-item">
									<img src={image1} id="carouselItem" className="d-block w-100" alt="" />
									<div className="carousel-caption d-none d-md-block">
										<h5>{activity.name}</h5>
										<p>{activity.desc}</p>
									</div>
								</div>;
							})}
						</div>
					</div>
					<a className="carousel-control-prev" href="#recentActivities" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="#recentActivities" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
		</React.Fragment>;
	}
}

export default ProfileActivity;

