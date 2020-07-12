import React from 'react'
import image from '../Images/young-tomato-5808.jpg'

function ProfileSideTransactionPanel() {
  return (
		<React.Fragment>
			<div className="d-flex justify-content-center col-md-4 transaction-panel">
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
  )
}

export default ProfileSideTransactionPanel
