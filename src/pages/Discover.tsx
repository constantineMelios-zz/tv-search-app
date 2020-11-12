import React from 'react'
import { DiscoverStyle } from '../styles'
import { RootStateOrAny, useSelector } from 'react-redux'
import TextSelector from '../helpers/TextSelector'
import { SortBy, TVShowList } from '../components'


export default function Discover() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  return <DiscoverStyle>
    <h1 className="discover__title">
      {TextSelector('Top TV Shows', 'Κορυφαίες Τηλεοπτικές Σειρές', language)}
    </h1>
    <SortBy />
    <TVShowList />
  </DiscoverStyle>
}