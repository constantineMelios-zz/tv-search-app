import React from 'react'
import { TvSet } from '../components'
import { HomeStyle } from '../styles'

export default function Home() {
  return (
    <HomeStyle>
      <div className="main__content">
        <div className="main__titles">
          <h1 className="main__title">Find your next TV series</h1>
          <p className="main__subtitle">Choose among the most popular or trending TV series right now. Discover shows you missed. Search your favorite actors and more.</p>
        </div>
        <TvSet className="main__svg" />
      </div>
    </HomeStyle>
  )
}
