import React, { Component } from 'react'
import './profile.css'
import ProfileSideTransactionPanel from './ProfileSideTransactionPanel'
import ProfileReviews from './ProfileReviews'
import ProfileReviewSideBar from './ProfileReviewSideBar'

class ProfileActivity extends Component {

  state={ recentActivities: [
    {
      id: 'hello world'
    },
    {
      id: 'hello World'
    }
  ]
}
  render(){
    return (
      <React.Fragment>
        <div className='row no-gutters profile-activity'>
          <div className='col-md-8'>
            <div className="container mt-2 mb-5">
            <h1 className="text-center recent-activity">Recent Activities</h1>
            <div className="carousel slide" id = "RecentSlide" data-ride="carousel">
              <div className ="carousel-inner" role="listbox">
                {this.state.recentActivities.map((activity,key) => {
                  if (key === 0) {
                    return(<div className="carousel-item active" key={activity.id}>
                          <div className="card">
                              <div className="card-block">
                                  <img className = "img-fluid" src = "https://www.thelogomix.com/files/imagecache/v3-logo-detail/coming-01.jpg" alt=""/>
                              </div>
                          </div>
                      </div>);
                  } else {
                    return(<div className="carousel-item" key={activity.id}>
                          <div className="card">
                              <div className="card-block">
                                  <img className = "img-fluid" id="Logo" src = "https://www.thelogomix.com/files/imagecache/v3-logo-detail/coming-01.jpg" alt=""/>
                              </div>
                          </div>
                      </div>);
                  }
                })}

              <a className = "carousel-control-prev" href = "#RecentSlide" role ="button" data-slide = "prev">
                <span className = "carousel-control-prev-icon"></span>
              </a>
              <a className = "carousel-control-next" href = "#RecentSlide" role ="button" data-slide = "next">
                  <span className = "carousel-control-next-icon"></span>
              </a>
              </div>
            </div>
            </div>
            <ProfileReviews />
          </div>
          <div className='col-md-4'>
            <ProfileSideTransactionPanel ngoName={this.props.ngoName} />
            <ProfileReviewSideBar />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProfileActivity
