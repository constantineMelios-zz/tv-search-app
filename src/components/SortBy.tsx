import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import TextSelector from '../helpers/TextSelector'
import { popularity, votes, date } from '../redux/sortBy'

export default function SortBy() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  const sortBy = useSelector((state: RootStateOrAny) => state.sortBy)
  const dispatch = useDispatch()

  return <form>
    <p>{TextSelector("Sort By", "Ταξινόμηση Βάση", language)}</p>
    <input type="radio"
      name="sortBy"
      value="BY_POPULARITY"
      checked={sortBy.type === 'popularity'}
      onChange={() => dispatch(popularity())}
    />
    <label htmlFor="popularity">{TextSelector("Popularity", "Δημοφίλία", language)}</label>

    <input type="radio"
      name="sortBy"
      value="BY_VOTES"
      checked={sortBy.type === 'votes'}
      onChange={() => dispatch(votes())}
    />
    <label htmlFor="votes">{TextSelector("Votes Average", "Βαθμολογίας", language)}</label>

    <input type="radio"
      name="sortBy"
      value="BY_DATE"
      data-dispatch={date}
      checked={sortBy.type === 'date'}
      onChange={() => dispatch(date())}
    />
    <label htmlFor="date">{TextSelector("First Air Date", "Ημερομηνία Προβολής", language)}</label>
  </form>
}