import React from 'react'

function ProfileReviewSideBar() {
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
      <div className="container ml-2 list-group review-side-bar">
        <p href="#review-bar" className="list-group-item">Recent Reviews</p>
        {
          reviews.map(review => {
            return <a href={`#reviewid`} key={review._id} className="list-group-item list-group-item-action">{review.title}</a>
          })
        }
      </div>
    </React.Fragment>
  )
}

export default ProfileReviewSideBar
