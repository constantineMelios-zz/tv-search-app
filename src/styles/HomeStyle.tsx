import styled, { keyframes } from 'styled-components'
import background from '../assets/background.svg'

const bgEntranceAnimation = keyframes`
  0% {background-position: 400% 100%}
  100% {background-position: bottom right}
`

const textAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

const HomeStyle = styled.main`
  width: 100vw;
  height: 100vh;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  animation: ${bgEntranceAnimation} 1s 1;
  @media(max-width: 800px) {
    align-items: center;
    justify-content: space-around;
  }
  .main__content {
    max-width: 1500px;
    height: 100%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    color: var(--white);
  }
  .main__titles {
    flex: 0 0 400px;
    padding:2em 1em;
    @media(max-width: 800px) {
      text-align: center;
    }
    .main__title {
      font-size: 3rem;
      font-weight: var(--boldFont);
      line-height: 1.15em;
      animation: ${textAnimation} 1s 1;
    }
    .main__subtitle {
      font-size: 1.25rem;
      font-weight: var(--lightFont);
      line-height: 1.15em;
      animation: ${textAnimation} 1.2s 1;
    }
    .main__svg {
      padding: 1em;
    }
  }
`

export default HomeStyle