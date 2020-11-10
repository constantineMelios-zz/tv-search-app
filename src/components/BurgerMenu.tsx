import React, { useRef } from 'react'
import { BurgerStyle } from '../styles'


export default function BurgerMenu() {
  const burger = useRef<HTMLDivElement>(null)

  function toggleMenu() {
    if (burger.current !== null) {
      burger.current.classList.toggle("active")
    }
  }

  return (
    <BurgerStyle ref={burger} onClick={toggleMenu}>
      <div className="burger__top"></div>
      <div className="burger__middle"></div>
      <div className="burger__bottom"></div>
      <div className="menu">
        <ul className='menu__list'>
          <li>Ada</li>
          <li>Anastasis</li>
          <li>Constantine</li>
        </ul>
      </div>
    </BurgerStyle>
  )
}