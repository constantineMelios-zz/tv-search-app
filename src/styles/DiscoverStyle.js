import styled, { keyframes } from 'styled-components';

const entranceAnimation = keyframes`
  0% {opacity: 0}
  100% {opacity: 100%}
`

const DiscoverStyle = styled.section`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  color: var(--white);
  padding: 0.5em;
  padding-bottom: 5em;
  .discover__title {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    font-weight: var(--boldFont);
    padding: 0.5em 0;
    animation: ${entranceAnimation} 0.5s 1;
  }
`

export default DiscoverStyle