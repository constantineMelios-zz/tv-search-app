import React, { useEffect } from 'react'
import dotenv from 'dotenv'
import { RootStateOrAny, useSelector } from 'react-redux'

dotenv.config({ path: '.env' })

export default function TVShowList() {
  const language = useSelector((state: RootStateOrAny) => state.language)
  const sortBy = useSelector((state: RootStateOrAny) => state.sortBy.url)
  const API_KEY = process.env.REACT_APP_API_KEY


  async function fetchData() {

    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=1&language=${language}&sort_by=${sortBy}`
    console.log(url)
    const response = await fetch(url)
    const json = await response.json()
    console.log(json.results[0].name)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, sortBy])

  return <div>Tv shows</div>
}