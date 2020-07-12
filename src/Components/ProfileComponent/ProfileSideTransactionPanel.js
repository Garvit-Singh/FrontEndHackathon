import React from 'react';
import image from '../Images/download.jpg';
import './profile.css';

function ProfileSideTransactionPanel() {
	return (
		<React.Fragment>
			<div className="col-md-3 mt-4">
				<div id="NGO_Logo" className="card text-center" style={{ width: '18rem' }}>
					<img src={image} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">NGO Name</h5>
						<a href="#" className="btn btn-primary">
							Donate
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ProfileSideTransactionPanel;
