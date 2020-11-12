import React, { useRef } from 'react'
import { ShowStyle } from '../styles'

export default function Show({ name, overview, poster, vote }) {
  const showRef = useRef<HTMLDivElement>(null)

  function handleClick() {
    if (showRef.current !== null) {
      showRef.current.classList.add('open')
    }
  }

  return (
    <ShowStyle
      ref={showRef}
    >
      <h2 className="show__title">{name}</h2>
      <img className="show__img"
        src={`http://image.tmdb.org/t/p/w300${poster}`}
        alt={`${name} poster`}
        loading="lazy"
      />
      <p className="show__description">{overview}</p>
      <p className="show__votes">{vote}<span>/10</span></p>
    </ShowStyle>

  )
}