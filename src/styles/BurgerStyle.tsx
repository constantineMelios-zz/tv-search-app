import styled, { keyframes } from "styled-components";

const entranceAnimation = keyframes`
  0% {transform: translateX(-100%) translateY(-100%)}
  100% {transform: translateX(0) translateY(0)}
`

const BurgerStyle = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  padding: 12px;
  background: var(--light);
  border-bottom-right-radius: 100%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  transition: width 0.25s ease-out, height 0.25s ease-out, border-bottom-right-radius 0.4s, box-shadow 0.25s ease;
  animation: ${entranceAnimation} 1s 1;
  z-index: 1;
  :hover {
    box-shadow: none;
  }
  .burger__top,
  .burger__middle,
  .burger__bottom {
    width: 22px;
    height: 3px;
    background: var(--white);
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

export default BurgerStyle