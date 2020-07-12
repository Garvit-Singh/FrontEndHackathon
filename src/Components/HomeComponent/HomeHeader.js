import React from 'react'

function HomeHeader() {
  return (
    <React.Fragment>
    <header className='mb-0' id="home-header">
      {/* <div className="container"> */}
        <div class="jumbotron jumbotron-fluid mb-0">
          <div class="container display-4 text-center">Welcome to ngoDONOR</div>
        </div>
        {/* <div className="display-4 d-flex justify-content-center">
          Welcome to ngoDONOR
        </div> */}
      {/* </div> */}
    </header>
    </React.Fragment>
  )
}

export default HomeHeader
