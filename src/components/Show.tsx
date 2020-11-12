import React from 'react'

export default function Show({ name, overview, poster, vote }) {
  return (
    <img src={`http://image.tmdb.org/t/p/w500${poster}`} alt={`${name} poster`} loading="lazy" />
  )
}