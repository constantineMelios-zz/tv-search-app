import styled, { keyframes } from 'styled-components';

const entranceAnimation = keyframes`
  30% {transform: translateX(30%) translateY(15%); opacity: 0;}
  100% {transform: translateX(0) translateY(0); opacity: 1;}
`

const ShowStyle = styled.div`
  margin: 0.5em;
  height: 450px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  border-radius: 2em;
  cursor: pointer;
  color: var(--dark);
  border-radius: 2em;
  position: relative;
  animation: ${entranceAnimation} 0.25s 1;
  :hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.86);
  }
  &.open{
    .show__details {
      transform: scale(1);
      opacity: 1;
    }
  }
  .show__img {
      border-radius: 2em;
      object-fit: cover;
    }
  .show__details {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: rgba(455, 455, 455, 0.85);
    border-radius: 2em;
    color: var(--dark);
    padding: 2em 1.25em;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    transform: scale(0.1);
    opacity: 0;
    transition: transform 0.25s ease, opacity 0.25s ease;
    .show__title {
      font-size: 1.8rem;
      font-weight: var(--boldFont);
    }
    .show__votes {
      width: 100%;
      color: #5C946E;
      font-size: 2rem;
      font-weight: var(--boldFont);
      text-align: right;
      span {
        font-size: 1rem;
        color: var(--dark);
        font-weight: var(--lightFont);
      }
    }
  }
`

export default ShowStyle