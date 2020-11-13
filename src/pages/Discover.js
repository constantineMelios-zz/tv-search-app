import React from 'react'
import { DiscoverStyle } from '../styles'
import { useSelector } from 'react-redux'
import TextSelector from '../helpers/TextSelector'
import { SortBy, TVShowList } from '../components'
import useWindowDimensions from '../helpers/useWindowDimensions'


export default function Discover() {
  const language = useSelector((state) => state.language)
  const {height, width} = useWindowDimensions()

  return (
    <div className="page-container" style={{minHeight: height, width: width}}>
      <DiscoverStyle>
      <h1 className='discover__title'>
        {TextSelector('Top TV Shows', 'Κορυφαίες Τηλεοπτικές Σειρές', language)}
      </h1>
      <SortBy />
      <TVShowList />
    </DiscoverStyle>
  </div>
  )
}