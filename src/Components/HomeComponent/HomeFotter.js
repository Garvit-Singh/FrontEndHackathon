import React from 'react'

function HomeFotter() {
  return (
    <React.Fragment>
      <div className="row no-gutters bg-dark fotter">
        <div className="col-md-6">
          <h5 className="fotter-title">About Us</h5>
          {/* <p className=""> */}
<div className="list-group fotter-content">
  <button type="button" className="list-group-item bg-dark list-color">Work from Home</button>
  <button type="button" className="list-group-item bg-dark list-color">BITS PILANI, GOA CAMPUS</button>
  <button type="button" className="list-group-item bg-dark list-color">Hackathon Project</button>
  <button type="button" className="list-group-item bg-dark list-color">Contact Details</button>
</div>
          {/* </p> */}
        </div>
        <div className="col-md-6">
          <h5 className="fotter-title">Contributors</h5>
          {/* <p className="fotter-content"> */}
<div className="list-group fotter-content">
  <button type="button" className="list-group-item bg-dark list-color">Vishal</button>
  <button type="button" className="list-group-item bg-dark list-color">Abhay</button>
  <button type="button" className="list-group-item bg-dark list-color">Garvit</button>
</div>
          {/* </p> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeFotter
