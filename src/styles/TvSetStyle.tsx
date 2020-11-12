import styled, { keyframes } from 'styled-components'

const attentionAnimation = keyframes`
  28% {transform: rotate(0)}
  30% {transform: rotate(-5deg)}
  32% {transform: rotate(5deg)}
  34% {transform: rotate(0)}
`

const entranceAnimation = keyframes`
  0% {transform: translateX(170%) translateY(100%)}
  100% {transform: translateX(0) translateY(0)}
`

const TvSetStyle = styled.div`
  filter: drop-shadow(0 3px 6px rgba(0,0,0,0.56));
  transition: transform 0.2s ease;
  position: relative;
  min-width: 360px;
  max-width: 80vw;
  animation: ${attentionAnimation} 4s infinite, ${entranceAnimation} 1s 1;
  :hover,
  :active {
    transform: scale(1.02)
  }
  p {
    /* width: 290px; //canvas width */
    width: min-content;
    text-align: center;
    color: var(--white);
    font-size: 3rem;
    font-weight: var(--boldFont);
    position: absolute;
    top: 35%;
    left: 20%;
    opacity: 0.85;
    transition: color 0.25s ease;
    z-index: 1;
  }
  :hover p,
  :active p {
    color: var(--lighter);
  }
`



export default TvSetStyle