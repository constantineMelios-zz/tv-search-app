import React from 'react'
import { ModalStyle } from '../styles'

export default function Modal({ name, overview, poster, vote, setOpenModal }) {

  function handleClick() {
    setOpenModal(false)
  }

  return <ModalStyle onClick={handleClick}>
    <h2 className="show__title">{name}</h2>
    <img className="show__img"
      src={`http://image.tmdb.org/t/p/w300${poster}`}
      alt={`${name} poster`}
    />
    <p className="show__description">{overview}</p>
    <p className="show__votes">{vote}<span>/10</span></p>
  </ModalStyle>
}