import React, {useRef} from 'react'
import styled from 'styled-components'



const BurgerStyle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1em;
  left: 1em;
  .burger__top,
  .burger__middle,
  .burger__bottom {
    width: 22px;
    height: 3px;
    background: black;
  }
  .burger__middle,
  .burger__bottom {
    margin-top: 5px;
  }
  .burger__top,
  .burger__bottom {
    transform-origin: left;
    transition: transform 0.4s ease-out;
  }
  .burger__middle {
    transition: opacity 0.2s ease;
  } 
  &.open {
    .burger__top {
      transform: rotate(45deg)
    }
    .burger__middle {
      opacity: 0;
    }
    .burger__bottom {
      transform: rotate(-45deg)
    }
  }
`

export default function BurgerMenu() {
  const burger = useRef(null)

  function toggleMenu() {
   burger.current.classList.toggle("open")
  }

  return (
    <BurgerStyle ref={burger} onClick={toggleMenu}>
      <div className="burger__top"></div>
      <div className="burger__middle"></div>
      <div className="burger__bottom"></div>
    </BurgerStyle>
  )
}