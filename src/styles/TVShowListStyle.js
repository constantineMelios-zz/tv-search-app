import styled, { keyframes } from 'styled-components';

const entranceAnimation = keyframes`
  0% {transform: translateX(100%) translateY(100%); opacity: 0}
  100% {transform: translateX(0) translateY(0); opacity: 1}
`

const TVShowListStyle = styled.div`
  min-width: 350px;
  max-width: 1250px;
  margin: 1em auto;
  padding: 2em 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  background: var(--white);
  border-radius: 2em;
  animation: ${entranceAnimation} 0.5s 1;
`

export default TVShowListStyle