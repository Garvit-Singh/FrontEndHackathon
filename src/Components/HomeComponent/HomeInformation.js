import React from 'react'

function HomeInformation() {
  return (
    <section id="information-section">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className="p-5">
              <h1 className="display-4">About Us</h1>
              <p>This is a website about solutions so non profits can better tell 
                their stories of the causes and communities they support. 
                Basically developing a solution so non profits can connect better
                with donors in digital world.
                <br/>
                www.ourAPI.COM
                <br/>
                Hope you enjoy your shows and do not forget to share this with your friends
              </p>
              <a href="#api" className="btn btn-outline-success">
                Find More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeInformation
