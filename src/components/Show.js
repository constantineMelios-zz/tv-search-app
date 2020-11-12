import React, { useState } from 'react'
import { ShowStyle } from '../styles'
import Modal from './Modal'

export default function Show({ name, overview, poster, vote }) {
  const [openModal, setOpenModal] = useState(false)

  function handleClick() {
    setOpenModal(true)
  }

  return (
    <ShowStyle>
      <h2 className="show__title">{name}</h2>
      <img className="show__img"
        src={`http://image.tmdb.org/t/p/w300${poster}`}
        alt={`${name} poster`}
        loading="lazy"
        onClick={handleClick}
      />
      <p className="show__description">{overview}</p>
      <p className="show__votes">{vote}<span>/10</span></p>
      {openModal ?
        <Modal 
          name={name} 
          overview={overview} 
          poster={poster} 
          vote={vote} 
          setOpenModal={setOpenModal}
        /> : ""
      }
    </ShowStyle>

  )
}