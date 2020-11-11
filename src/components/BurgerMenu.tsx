import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { BurgerStyle } from '../styles'
import LanguageSelector from './LanguageSelector'
import { RiHomeFill, RiCompassDiscoverFill } from "react-icons/ri";
import { RootStateOrAny, useSelector } from 'react-redux';
import languageReducer from '../redux/language';


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
          <li><Link to="/"><RiHomeFill />{language === 'en' ? 'Home' : 'Αρχική'}</Link></li>
          <li><Link to="/discover"><RiCompassDiscoverFill />{language === 'en' ? 'Discover' : 'Ανακάλυψε'}</Link></li>
          <li><LanguageSelector /></li>
        </ul>
      </nav>
    </BurgerStyle>
  )
}