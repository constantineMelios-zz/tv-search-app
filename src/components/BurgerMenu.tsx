import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { BurgerStyle } from '../styles'
import LanguageSelector from './LanguageSelector'
import { RiHomeFill, RiCompassDiscoverFill, RiMailFill } from "react-icons/ri";
import { RootStateOrAny, useSelector } from 'react-redux';
import TextSelector from '../helpers/TextSelector';


export default function BurgerMenu() {
  const burger = useRef<HTMLDivElement>(null)
  const language = useSelector((state: RootStateOrAny) => state.language)

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
      <nav className="menu">
        <ul className='menu__list'>
          <li><Link to="/"><RiHomeFill />{TextSelector('Home', 'Αρχική', language)}</Link></li>
          <li><Link to="/discover"><RiCompassDiscoverFill />{TextSelector('Discover', 'Ανακάλυψε', language)}</Link></li>
          <li><Link to="/contact"><RiMailFill />{TextSelector('Contact Us', 'Επικοινωνία', language)}</Link></li>
          <li><LanguageSelector /></li>
        </ul>
      </nav>
    </BurgerStyle>
  )
}