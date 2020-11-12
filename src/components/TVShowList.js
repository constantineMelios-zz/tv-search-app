import React, { useEffect, useState } from 'react'
import dotenv from 'dotenv'
import { useSelector } from 'react-redux'
import Show from './Show'
import { TVShowListStyle } from '../styles'

dotenv.config({ path: '.env' })

export default function TVShowList() {
  const language = useSelector((state) => state.language)
  const sortBy = useSelector((state) => state.sortBy.url)
  const API_KEY = process.env.REACT_APP_API_KEY
  const [showsList, setShowsList] = useState([])


  async function fetchData() {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=1&vote_count.gte=50&language=${language}&sort_by=${sortBy}`
    const response = await fetch(url)
    const json = await response.json()
    setShowsList(json.results)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, sortBy])

  const shows = showsList.map((show, index) => {
    if (index < 18) {
      return (
        <Show 
          name={show.name} 
          overview={show.overview} 
          poster={show.poster_path} 
          vote={show.vote_average}
          key={show.id}
        />
      )
    }
  }
    
  )

  return <TVShowListStyle>
    {shows}
  </TVShowListStyle>
}