import styled from 'styled-components'

const TvSetStyle = styled.a`
  filter: drop-shadow(0 2px 5px rgba(0,0,0,0.26));
  transition: transform 0.2s ease;
  position: relative;
  :hover {
    transform: scale(1.05)
  }
  p {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 15%;
    z-index: 1;
  }
`

export default TvSetStyle