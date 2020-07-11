import React from 'react'
import image1 from '../Images/agriculture-close-up-cultivation-ecology-421999.jpg'
import image2 from '../Images/nature-sky-clouds-field-9198.jpg'
import image3 from '../Images/young-tomato-5808.jpg'
import image4 from '../Images/brown-painted-wall-on-dim-light-1055613.jpg'

function HomeSubsection() {

  return (
    <React.Fragment>

      <div className="container subsection">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={image1} className="card-img rounded-circle" alt="no image available"></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title title-color">Donation</h5>
              <p className="card-text">
                Donate for the betterment of society, children, villages,<br />
                bring knowledge to the uneducated and for you.<br />
                Millions are waiting for you!
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container subsection">
        <div className="row no-gutters reverse-section">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title title-color">About NGO'S</h5>
              <p className="card-text">
                Almost all popular NGO's are registered with us.<br />
                You can be 99% sure you can find the NGO's to whatever field you want to contribute to,<br/>
                will it be medical surgeries or providing food and eduction to our future<br />
                go ahead and be part of something great, something big,<br />
                something you can be proud to be a part of.
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={image2} className="card-img rounded-circle" alt="no image available"></img>
          </div>
        </div>
      </div>

      <div className="container subsection">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={image3} className="card-img rounded-circle" alt="no image available"></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title title-color">About Us</h5>
              <p className="card-text">
                Many have trusted our website and are happy working with us.<br />
                We never break our promises and provide you with the best we can.<br />
                Pleasure is ours too. To help others, to grow with others<br />
                We are chosen by many will you chose us?
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container subsection">
        <div className="row no-gutters reverse-section">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title title-color">Secure Payment</h5>
              <p className="card-text">
                Your payment is ensured by us with us.<br/>
                In case of doubts you can directly contact us <br/>
                with our contacts given below or you can contact NGO's directly<br/>
                for payment.<br />
                So what are you waiting for ?<br/>
                Go ahead save lives , knowledge and society!
              </p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={image4} className="card-img rounded-circle" alt="no image available"></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeSubsection
