import React, { useRef } from 'react'
import { ShowStyle } from '../styles'

export default function Show({ name, overview, poster, vote }) {
  const showRef = useRef(null)

  function handleClick() {
    if(showRef.current !== null) {
      showRef.current.classList.toggle('open')
    }
  }

  return (
    <ShowStyle ref={showRef} onClick={handleClick}>
      <img className='show__img'
        src={`http://image.tmdb.org/t/p/w300${poster}`}
        alt={`${name} poster`}
        loading='lazy'
      />
      <div className='show__details'>
        <h2 className='show__title'>{name}</h2>
        <p className='show__description'>{overview}</p>
        <p className='show__votes'>{vote}<span>/10</span></p>
      </div>
    </ShowStyle>
  )
}