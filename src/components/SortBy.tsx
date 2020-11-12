import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import TextSelector from '../helpers/TextSelector'
import { popularity, votes, date } from '../redux/sortBy'
import { SortByStyle } from '../styles'

export default function SortBy() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  const sortBy = useSelector((state: RootStateOrAny) => state.sortBy)
  const dispatch = useDispatch()

  return <SortByStyle>
    <h2 className="sort__title">{TextSelector("Sort By", "Ταξινόμηση Βάση", language)}</h2>
    <div className="sort__radios">
      <div className="sort__radio-container">
        <label className="sort__label">
          <input className="sort__radio"
            type="radio"
            name="sortBy"
            value="BY_POPULARITY"
            checked={sortBy.type === 'popularity'}
            onChange={() => dispatch(popularity())}
          />
          {TextSelector("Popularity", "Δημοφιλίας", language)}
        </label>
      </div>
      <div className="sort__radio-container">
        <label className="sort__label">
          <input className="sort__radio"
            type="radio"
            name="sortBy"
            value="BY_VOTES"
            checked={sortBy.type === 'votes'}
            onChange={() => dispatch(votes())}
          />
          {TextSelector("Votes Average", "Βαθμολογίας", language)}
        </label>
      </div>
      <div className="sort__radio-container">
        <label className="sort__label">
          <input className="sort__radio"
            type="radio"
            name="sortBy"
            value="BY_DATE"
            checked={sortBy.type === 'date'}
            onChange={() => dispatch(date())}
          />
          {TextSelector("First Air Date", "Ημερομηνίας Προβολής", language)}
        </label>
      </div>
    </div>
  </SortByStyle>
}