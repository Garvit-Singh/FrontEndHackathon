import React from 'react'
import './home.css'
import HomeHeader from './HomeHeader'
import HomeInformation from './HomeInformation'
import HomeSubsection from './HomeSubsection'
import HomeFotter from './HomeFotter'

function Home() {
  return (
    <React.Fragment>
      <HomeHeader />
      <HomeInformation />
      <HomeSubsection />
      <HomeFotter />
    </React.Fragment>
  )
}

export default Home
