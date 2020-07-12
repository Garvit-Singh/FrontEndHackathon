import React from 'react'

const starColor = {
  color: '#F1C40F',
  marginTop: '20px'
}

function ProfileReviews() {
  // calling reviews by state or as props or by useContext
  const reviews = [
    {
      _id: 1,
      title: 'Review Section Started',
      description: 'Welcome to ngoDONOR\'s. Hope your Wish to help others get\'s fulfilled.'
    }
  ]
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row review-panel'>
          <h4 className='review-head'>
            Reviews
          </h4>
            <i className='material-icons' style={starColor}>star</i>
            <i className='material-icons' style={starColor}>star</i>
            <i className='material-icons' style={starColor}>star</i>
            <i className='material-icons' style={starColor}>star</i>
            <i className='material-icons' style={starColor}>star</i>
          <div className='container d-flex flex-column'>
            <ul className="list-group list-group-flush">
              {
                reviews.map(review => {
                  return <li key={'review'+review._id} className="list-group-item text-left review-list-color">
                          <h6>{review.title}</h6>
                          <p>{review.description}</p>
                        </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProfileReviews
