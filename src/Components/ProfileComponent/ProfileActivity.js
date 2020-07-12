import React, {Component} from 'react'
import ProfileSideTransactionPanel from './ProfileSideTransactionPanel'

class ProfileActivity extends Component {
  render() {
    return(
    <React.Fragment>
      <div className='row no-gutters profile-activity'>
        <div className='col-md-8'>
          <h1 className="text-center">Recent Activities</h1>
          <div className="carousel slide" id = "RecentSlide" data-ride="carousel">
            <div className ="carousel-inner" role="listbox">
              {this.props.recentActivities.map((activity,key) => {
                if (key === 0) {
                  return(<div className="carousel-item active">
                        <div className="card">
                            <div className="card-block">
                                <img className = "img-fluid" src = "https://www.thelogomix.com/files/imagecache/v3-logo-detail/coming-01.jpg" alt=""/>
                            </div>
                        </div>
                    </div>);
                } else {
                  return(<div className="carousel-item">
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
        <ProfileSideTransactionPanel />
      </div>
    </React.Fragment>
  )
}
}

export default ProfileActivity


