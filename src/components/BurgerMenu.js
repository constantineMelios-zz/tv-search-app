import React, {useRef} from 'react'
import styled from 'styled-components'



const BurgerStyle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  padding: 25px;
  background: #ffffff;
  border-bottom-right-radius: 100%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  transition: width 0.25s ease-out, height 0.25s ease-out, border-bottom-right-radius 0.4s ;
  z-index: 1;
  .burger__top,
  .burger__middle,
  .burger__bottom {
    width: 22px;
    height: 3px;
    background: black;
    transition: transform 0.25s ease-out;
  }
  .burger__middle,
  .burger__bottom {
    margin-top: 5px;
  }
  .burger__top,
  .burger__bottom {
    transform-origin: left;
  }
  .burger__middle {
    transition: opacity 0.15s ease;
  }
  .menu {
    position: absolute;
    top: 25%;
    left: 25%;
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    .menu__list {
      width: 50vw;
      height: 50vh;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }
  &.active {
    width: 100vw;
    height: 100vh;
    border-bottom-right-radius: 0%;
    .menu {
      display: block;
      opacity: 1;
    }
    .burger__top {
      transform: rotate(45deg);
    }
    .burger__middle {
      opacity: 0;
    }
    .burger__bottom {
      transform: rotate(-45deg);
    }
  }
`

export default function BurgerMenu() {
  const burger = useRef(null)

  function toggleMenu() {
   burger.current.classList.toggle("active")
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